<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';

class departmentApi extends REST_Controller{

    function __construct() {
                parent::__construct();
                $this->load->helper('my_api');
    }    


  

  function department_get(){
        $id=$this->uri->segment(3);
        $this->load->model('Model_departments');
    	if(isset($id)){
    	
    	$department = $this->Model_departments->get_by(array('Id'=>$id));
        
    	 if(isset($department['Id'])){
          $this->response(array('status' =>'success','message'=>$department ));

    	}else{
    		$this->response(array('status' =>'failure','message'=>'No data found' ));

    	}    	
    }
    	else
        {
          
          $department = $this->Model_departments->get_all();
          $this->response(array('status' =>'success','message'=>$department ));
        }

    }

function department_put() {
	$this->load->library('form_validation');
	$data = remove_unknown_fields($this->put(), $this->form_validation->get_field_names('department_put'));
	$this->form_validation->set_data($data);
	if ($this->form_validation->run('department_put') !=false) {
		$this->load->model('Model_departments');
		$exists = $this->Model_departments->get_by(array('Department_Name'=> $this->put('Department_Name')));
		if($exists){
              $this->response (array('status'=>'failure', 'message'=>'the specified department already exists'),REST_Controller::HTTP_CONFLICT);
		}
		//$department=$this->put();
		$department_id =$this->Model_departments->insert($data);


		if(!$department_id){
                 $this->response(array('status'=>'failure','message'=>'An unexpected error occurred while trying to create the department'),REST_Controller::HTTP_INTERNAL_SERVER_ERROR);
		}else{
                $this->response(array('status' =>'success','message'=>'Created' ));
		}
	}
	else{
        $this->response(array('status'=> 'form failure', 'message'=> $this->form_validation->get_errors_as_array()),REST_Controller::HTTP_BAD_REQUEST);
	}
}



    function department_post(){
    	$department_id =$this->uri->segment(3);
    	$this->load->model('Model_departments');
    	$department=$this->Model_departments->get_by(array('Id' => $department_id));
    	 if(isset($department['Id'])){


    $this->load->library('form_validation');
	$data = remove_unknown_fields($this->post(), $this->form_validation->get_field_names('department_post'));
	$this->form_validation->set_data($data);
	if ($this->form_validation->run('department_post') !=false) {
		$this->load->model('Model_departments');
		$safe_Department_Name = !isset($data['Department_Name']) || $data['Department_Name']==$department['Department_Name '] || !$this->Model_departments->get_by(array('Department_Name'=> $this->post('Department_Name')));
		if(!$safe_Department_Name){
              $this->response (array('status'=>'failure', 'message'=>'the specified Department Name already use'),REST_Controller::HTTP_CONFLICT);
		}
		//$department=$this->put();
		$updated =$this->Model_departments->update($department_id,$data);


		if(!$updated){
                 $this->response(array('status'=>'failure','message'=>'An unexpected error occurred while trying to update the department'),REST_Controller::HTTP_INTERNAL_SERVER_ERROR);
		}else{
                $this->response(array('status' =>'success','message'=>'Updated' ));
		}
	}

    	}else{
    		$this->response(array('status' =>'failur','message'=>'No data found for update' ));

    	}
    }


        function department_delete(){
    	$department_id=$this->uri->segment(3);
    	$this->load->model('Model_departments');
    	$department=$this->Model_departments->get_by(array('Id' => $department_id));
    	$deleted =$this->Model_departments->delete($department_id);
    	 if(isset($deleted)){
    	  
          $this->response(array('status' =>'success','message'=>'Delete succesful' ));

    	}else{
    		$this->response(array('status' =>'failure','message'=>'No data found' ));

    	}}
    }

 ?>