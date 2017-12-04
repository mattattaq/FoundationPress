
<!-- <img src="<?php echo site_url("assets/img/gosplash_cover_photo.jpg"); ?>" width="100%" /> -->
<div class="row" id="<?php echo url_slug(_translate('nav_flavours')); ?>">
	<div class="innercontainer clearfix topborder">
		<?php if($flavours) { ?>
			<div id="temp_flavours">
				<h2><?php echo _translate('nav_flavours'); ?></h2>
				<ul class="list">
					<?php foreach($flavours as $key => $flavour) { ?>
						<?php $selected = ($key == 0 ? 'selected' : NULL); ?>
						<li class="<?php echo $selected; ?>" data-target="<?php echo url_slug($flavour->name); ?>"><?php echo $flavour->name; ?></li>
					<?php } ?>
				</ul>


				<ul class="panels">
					<?php foreach($flavours as $key => $flavour) { ?>
						<?php $selected = ($key == 0 ? 'selected' : NULL); ?>
						<li class="<?php echo $selected; ?>" id="<?php echo url_slug($flavour->name); ?>">
							<div class="image">
								<img src="<?php echo site_url('local_resources/image/' . $flavour->image); ?>">
							</div>
							<div class="content">
								<h3><?php echo $flavour->name; ?></h3>
								<?php echo $flavour->description; ?>
							</div>
						</li>
					<?php } ?>
				</ul>

			</div>
		<?php } ?>

	</div>
</div>
