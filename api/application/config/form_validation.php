<?php  if ( !defined('BASEPATH')) exit('No direct script access allowed');

$config= array(
   'student_put'=>array(
  array('field' =>'Name','label'=>'Name','rules'=>'trim|required|max_length[20]'),
  array('field' =>'Phone','label'=>'Phone','rules'=>'trim|required|max_length[20]'),
  array('field' =>'Department_id','label'=>'Department_id','rules'=>'trim|required'),
  array('field' =>'Class_id','label'=>'Class','rules'=>'trim|required'),
	),
   'student_post'=>array(
  array('field' =>'Name','label'=>'Name','rules'=>'trim|required|max_length[20]'),
  array('field' =>'Phone','label'=>'Phone','rules'=>'trim|required|max_length[20]'),
  array('field' =>'Department_id','label'=>'Department_id','rules'=>'trim|required'),
  array('field' =>'Class_id','label'=>'Class','rules'=>'trim|required'),
	),  
   'department_put'=>array(
  array('field' =>'Department_Name','label'=>'Department Name','rules'=>'trim|required|max_length[20]'),
  ),
   'department_post'=>array(
    array('field' =>'Department_Name','label'=>'Department Name','rules'=>'trim|required|max_length[20]'),
  ),     
   'class_put'=>array(
  array('field' =>'Class_Name','label'=>'Class Name','rules'=>'trim|required|max_length[20]'),
  ),
   'class_post'=>array(
    array('field' =>'Class_Name','label'=>' Name','rules'=>'trim|required|max_length[20]'),
  ),  
);
?>