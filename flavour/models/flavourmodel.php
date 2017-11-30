<?php 


	// public function getAvailableAt()
	// {
		
	// 	$language = $this->session->userdata("language");

	// 	$query = $this->db
	// 		->from("available_at")
	// 		->where("status", 1)
	// 		->where("lang_id", $language->id)
	// 		->where("DATE(publicatiedatumtijd) <= DATE(NOW())")
	// 		->get();

	// 	if($query->num_rows() > 0)
	// 	{
	// 		return $query->result();
	// 	}
	// 	return false;
	// }

	// public function getFlavours()
	// {

	// 	$language = $this->session->userdata("language");

	// 	$query = $this->db
	// 		->from("flavours")
	// 		->where("status", 1)
	// 		->where("lang_id", $language->id)
	// 		->where("DATE(publicatiedatumtijd) <= DATE(NOW())")
	// 		// ->limit(1)
	// 		->order_by('prio')
	// 		->get();

	// 	if($query->num_rows() > 0)
	// 	{
	// 		// set imagepath. ad trailing slash, couse realpath removes it.
	// 		$imagepath = realpath(FCPATH . "/assets/animation/img") . "/";

	// 		$flavours = $query->result();

	// 		if($flavours)
	// 		{
	// 			foreach($flavours as $key => &$flavour)
	// 			{
	// 				$flavour->animation_images = false;

	// 				$subdir = url_slug($flavour->name);

	// 				$subdir = explode('-',$subdir);

	// 				$subdir = array_map(function(&$val){
	// 					return ucfirst($val);
	// 				}, $subdir);

	// 				$subdir = implode('', $subdir);

	// 				$path = $imagepath . $subdir;

	// 				if(is_dir($path))
	// 				{
	// 					$files = scandir($path);
	// 					foreach($files as $file)
	// 					{
	// 						if(is_file($path . DIRECTORY_SEPARATOR . $file ))
	// 						{
	// 							if(!is_array($flavour->animation_images))
	// 							{
	// 								$flavour->animation_images = array();
	// 							}
	// 							$flavour->animation_images[] = get_theme_file_uri("assets/animation/img/{$subdir}/" . $file);
	// 						}
	// 					}
	// 				}
	// 				else
	// 				{
	// 					unset($flavour);
	// 					unset($flavours[$key]);
	// 				}
	// 			}

	// 			$temparray = array();
	// 			foreach($flavours as $key => $value)
	// 			{
	// 				if((count($flavours)%2 == 0 && $key > ceil(count($flavours) / 2)) || (count($flavours)%2 != 0 && $key >= ceil(count($flavours) / 2)))
	// 				{
	// 					$temparray[] = $value;
	// 					unset($flavours[$key]);
	// 				}
	// 			}

	// 			return array_merge($temparray, $flavours);

	// 			return $flavours;
	// 		}
	// 		return false;
	// 	}
	// 	return false;
	// }
?>