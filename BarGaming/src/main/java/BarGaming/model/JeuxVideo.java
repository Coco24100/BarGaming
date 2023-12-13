package BarGaming.model;

import jakarta.persistence.DiscriminatorValue;

@DiscriminatorValue("video")
public class JeuxVideo extends Jeux{

	private Plateforme plateforme;
}
