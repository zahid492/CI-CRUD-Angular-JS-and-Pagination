<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';

class StudentApi extends REST_Controller{

    function __construct() {
                parent::__construct();
                $this->load->helper('my_api');
    }    


  

  function student_get(){
        $id=$this->uri->segment(3);
    	if(isset($id)){
    	$this->load->model('Model_students');
    	$student = $this->Model_students->infogetone($id)->get_all();
        
    	 if(isset($student)){
          $this->response(array('status' =>'success','message'=>$student ));

    	}else{
    		$this->response(array('status' =>'failur','message'=>'No data found' ));

    	}    	
    }
    	else
        {
        $student_count = $this->Model_students->infogetcount($id)->get_all();
        $this->load->model('Model_students'); 	
    	$student = $this->Model_students->infogetall()->get_all();
        $this->response(array('status' =>'success','count'=>$student_count,'message'=>$student ));   
        }

    }

function student_put() {
	$this->load->library('form_validation');
	$data = remove_unknown_fields($this->put(), $this->form_validation->get_field_names('student_put'));
	$this->form_validation->set_data($data);
	if ($this->form_validation->run('student_put') !=false) {
		$this->load->model('Model_students');
		$exists = $this->Model_students->get_by(array('Phone'=> $this->put('Phone')));
		if($exists){
              $this->response (array('status'=>'failure', 'message'=>'the specified phone already exists'),REST_Controller::HTTP_CONFLICT);
		}
		//$student=$this->put();
		$student_id =$this->Model_students->insert($data);


		if(!$student_id){
                 $this->response(array('status'=>'failure','message'=>'An unexpected error occurred while trying to create the student'),REST_Controller::HTTP_INTERNAL_SERVER_ERROR);
		}else{
                $this->response(array('status' =>'success','message'=>'Created' ));
		}
	}
	else{
        $this->response(array('status'=> 'form failure', 'message'=> $this->form_validation->get_errors_as_array()),REST_Controller::HTTP_BAD_REQUEST);
	}
}



    function student_post(){
    	$student_id =$this->uri->segment(3);
    	$this->load->model('Model_students');
    	$student=$this->Model_students->get_by(array('Id' => $student_id));
    	 if(isset($student['Id'])){


    $this->load->library('form_validation');
	$data = remove_unknown_fields($this->post(), $this->form_validation->get_field_names('student_post'));
	$this->form_validation->set_data($data);
	if ($this->form_validation->run('student_post') !=false) {
		$this->load->model('Model_students');
		$safe_phone = !isset($data['Phone']) || $data['Phone']==$student['Phone '] || !$this->Model_students->get_by(array('Phone'=> $this->post('Phone')));
		if(!$safe_phone){
              $this->response (array('status'=>'failure', 'message'=>'the specified Phone already use'),REST_Controller::HTTP_CONFLICT);
		}
		//$student=$this->put();
		$updated =$this->Model_students->update($student_id,$data);


		if(!$updated){
                 $this->response(array('status'=>'failure','message'=>'An unexpected error occurred while trying to update the student'),REST_Controller::HTTP_INTERNAL_SERVER_ERROR);
		}else{
                $this->response(array('status' =>'success','message'=>'Updated' ));
		}
	}

    	}else{
    		$this->response(array('status' =>'failur','message'=>'No data found for update' ));

    	}
    }


        function student_delete(){
    	$student_id=$this->uri->segment(3);
    	$this->load->model('Model_students');
    	$student=$this->Model_students->get_by(array('Id' => $student_id));
    	$deleted =$this->Model_students->delete($student_id);
    	 if(isset($deleted)){
    	  
          $this->response(array('status' =>'success','message'=>'Delete succesful' ));

    	}else{
    		$this->response(array('status' =>'failure','message'=>'No data found' ));

    	}}
    }

 ?>