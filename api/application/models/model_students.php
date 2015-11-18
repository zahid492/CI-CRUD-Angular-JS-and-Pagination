<?php

defined('BASEPATH') OR exit('No direct script access allowed');


/**
* 
*/
class Model_students extends My_Model
{
	
	protected $_table='basic_information';
	protected $primary_key='Id';
	protected $return_type='array';

	//protected $after_get = array('remove_sensitive_data');
	protected $before_create=array('prep_data');


    //public $belongs_to = array( 'department' );
	// protected function remove_sensitive_data($student){

	// 	unset($student['password']);
	// 	return $student;
	// }
	protected function prep_data($student){
        $a="+880";
		$student['Phone']=$a.$student['Phone'];
		return $student;
	}


	    public function infogetone($id)
    {
        $this->db->select('basic_information.*, department.Department_Name,class.Class_Name');
        $this->db->join('department', 'department.Id = basic_information.Department_id');
        $this->db->join('class', 'class.Id = basic_information.Class_id');
        $this->db->where('basic_information.Id', $id);
        //$this->db->order_by("order", "asc");

        return $this;
    }

	    public function infogetall()
    {
        $this->db->select('basic_information.*, department.Department_Name,class.Class_Name');
        $this->db->join('department', 'department.Id = basic_information.Department_id');
        $this->db->join('class', 'class.Id = basic_information.Class_id');
        //$this->db->where('students.student_id', $id);
        //$this->db->order_by("order", "asc");

        return $this;
    }

        public function infogetcount($id)
    {
        $this->db->select('count(basic_information.Id) as student_total');
        $this->db->join('department', 'department.Id = basic_information.Department_id');
        $this->db->join('class', 'class.Id = basic_information.Class_id');
        //$this->db->order_by("order", "asc");

        return $this;
    }

}
