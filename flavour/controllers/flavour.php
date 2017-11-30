<?php
class Flavour extends MX_controller
{
	public function __construct()
	{
		parent::__construct();
		$this->addAssets();
	}

	public function show()
	{
		$data = new stdClass;
		$data->available_at = $this->FlavourModel->getAvailableAt();
		// $data->flavours = $this->FlavourModel->getFlavours();
		$data->flavours = $this->FlavourModel->getFlavours();

		if(is_mobile())
		{
			$this->load->view("flavour_mobile", $data);
		}
		else
		{
			$this->load->view("flavour", $data);
		}
	}


	private function addAssets()
	{
		$CI =& get_instance();
		if(is_mobile())
		{

		}
		else
		{
			$CI->js[] = site_url('/assets/animation/circle-progress.js');
			$CI->js[] = site_url('/assets/animation/animation.js');
			$CI->css[] = site_url('/assets/animation/animation.css');
		}
	}
}