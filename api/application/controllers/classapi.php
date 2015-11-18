<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';

class classApi extends REST_Controller{

    function __construct() {
                parent::__construct();
                $this->load->helper('my_api');
    }    


  

  function class_get(){
        $id=$this->uri->segment(3);
        $this->load->model('Model_classes');
        if(isset($id)){
        
        $class = $this->Model_classes->get_by(array('Id'=>$id));
        
         if(isset($class['Id'])){
          $this->response(array('status' =>'success','message'=>$class ));

        }else{
            $this->response(array('status' =>'failur','message'=>'No data found' ));

        }       
    }
        else
        {
          
          $class = $this->Model_classes->get_all();
          $this->response(array('status' =>'success','message'=>$class ));
        }

    }

function class_put() {
    $this->load->library('form_validation');
    $data = remove_unknown_fields($this->put(), $this->form_validation->get_field_names('class_put'));
    $this->form_validation->set_data($data);
    if ($this->form_validation->run('class_put') !=false) {
        $this->load->model('Model_classes');
        $exists = $this->Model_classes->get_by(array('Class_Name'=> $this->put('Class_Name')));
        if($exists){
              $this->response (array('status'=>'failure', 'message'=>'the specified class already exists'),REST_Controller::HTTP_CONFLICT);
        }
        //$class=$this->put();
        $class_id =$this->Model_classes->insert($data);


        if(!$class_id){
                 $this->response(array('status'=>'failure','message'=>'An unexpected error occurred while trying to create the class'),REST_Controller::HTTP_INTERNAL_SERVER_ERROR);
        }else{
                $this->response(array('status' =>'success','message'=>'Created' ));
        }
    }
    else{
        $this->response(array('status'=> 'form failure', 'message'=> $this->form_validation->get_errors_as_array()),REST_Controller::HTTP_BAD_REQUEST);
    }
}



    function class_post(){
        $class_id =$this->uri->segment(3);
        $this->load->model('Model_classes');
        $class=$this->Model_classes->get_by(array('Id' => $class_id));
         if(isset($class['Id'])){


    $this->load->library('form_validation');
    $data = remove_unknown_fields($this->post(), $this->form_validation->get_field_names('class_post'));
    $this->form_validation->set_data($data);
    if ($this->form_validation->run('class_post') !=false) {
        $this->load->model('Model_classes');
        $safe_class_Name = !isset($data['class_Name']) || $data['class_Name']==$class['class_Name '] || !$this->Model_classes->get_by(array('class_Name'=> $this->post('class_Name')));
        if(!$safe_class_Name){
              $this->response (array('status'=>'failure', 'message'=>'the specified class Name already use'),REST_Controller::HTTP_CONFLICT);
        }
        //$class=$this->put();
        $updated =$this->Model_classes->update($class_id,$data);


        if(!$updated){
                 $this->response(array('status'=>'failure','message'=>'An unexpected error occurred while trying to update the class'),REST_Controller::HTTP_INTERNAL_SERVER_ERROR);
        }else{
                $this->response(array('status' =>'success','message'=>'Updated' ));
        }
    }

        }else{
            $this->response(array('status' =>'failur','message'=>'No data found for update' ));

        }
    }


        function class_delete(){
        $class_id=$this->uri->segment(3);
        $this->load->model('Model_classes');
        $class=$this->Model_classes->get_by(array('Id' => $class_id));
        $deleted =$this->Model_classes->delete($class_id);
         if(isset($deleted)){
          
          $this->response(array('status' =>'success','message'=>'Delete succesful' ));

        }else{
            $this->response(array('status' =>'failure','message'=>'No data found' ));

        }}
    }

 ?>