<h1>Select your flavour</h1>
<div class="background">
	<img src="<?php echo get_template_directory_uri(); ?>/assets/img/animation-background.jpg" />
</div>

	<?php // slider

		// if($flavours)
		// {
			?>
			<div class="loading">
				<img src="<?php get_template_directory_uri(); ?>/assets/img/animation-background-blur.jpg">
				<div class="progress">
					<canvas class="loader"></canvas>
				</div>
			</div>
			<div class="slider-wrap">
				<div class="prev">
					<img src="<?php get_template_directory_uri(); ?>/assets/img/btn_prev.png" />
				</div>
				<div class="next">
					<img src="<?php echo site_url('assets/img/btn_next.png'); ?>" />
				</div>
				<div id="animationtrigger">Pick this flavour</div>
				<ul id="slider"><?php
				foreach($flavours as $flavourkey => $flavour)
				{
					if($flavour->animation_images)
					{
						?><li data-target="<?php echo "#flavour{$flavourkey}"; ?>"><img src="<?php echo $flavour->animation_images[0]; ?>" alt="<?php echo $flavour->name; ?>" title="<?php echo $flavour->name; ?>" /></li><?php
					}
				}
				?></ul>
				<div id="chooseFlavour">
					<div style="height: 80%; width: 14%; margin: 3%;" data-go="-2"></div>
					<div style="height: 90%; width: 16%; margin: 2%;" data-go="-1"></div>
					<div style="height: 100%; width: 18%; margin: 1%;" data-go="0"></div>
					<div style="height: 90%; width: 16%; margin: 2%;" data-go="1"></div>
					<div style="height: 80%; width: 14%; margin: 3%;" data-go="2"></div>
				</div>
			</div>
			<?php
		// }
	?>

	<?php // animation
		// if($flavours)
		// {
			?>
			<div id="textwrapper">
				<div id="text01" class="text">
					<div class="number">1</div>
					<p>Grab a glass or bottle of water</p>
				</div>

				<div id="text02" class="text">
					<div class="number">2</div>
					<p>Squeeze the preferred amount of Go Splash</p>
				</div>

				<div id="text03" class="text">
					<div class="number">3</div>
					<p>Enjoy it your way!</p>
				</div>


				<div id="flavourdescriptions" class="text" class="hidden">
					<div class="prev hidden">
						<img src="<?php get_template_directory_uri()?>/assets/img/btn_prev.png" />
					</div>
					<div class="next hidden">
						<img src="<?php get_template_directory_uri()?>/assets/img/btn_next.png" />
					</div>
					<ul class="panels"><?php
						foreach($flavours as $key => $flavour)
						{
							?><li>
								<div class="content">
									<h3><?php echo $flavour->name; ?></h3>
									<?php echo cleanBeginAndEnd($flavour->description); ?>
								</div>
							</li><?php
						 }
					?></ul>
				</div>




			</div>


			<div id="animation"><?php
			foreach($flavours as $flavourkey => $flavour)
			{
				echo "\n\t";
				?><ul id="<?php echo "flavour{$flavourkey}"; ?>" style="opacity: 0;" ><?php
				if($flavour->animation_images)
				{
					foreach($flavour->animation_images as $key => $image)
					{
						if($key%3 !== 0) continue;
						if($key < 30)
						{
							$image = $flavour->animation_images[0];
						}
						echo "\n\t\t";
						?><li style="opacity: 0;"><img src="<?php echo $image; ?>" alt="<?php echo $flavour->name; ?>" title="<?php echo $flavour->name; ?>" /></li><?php
					}
				}
				?></ul><?php
			}
			?></div><?php
		// }
	?>
