package BarGaming.model;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public class Tournoi extends Evenement {

	public Tournoi(Integer id, List<Client> participants, String nom, LocalDate date, LocalTime horaireDebut,
			LocalTime horaireFin) {
		super(id, participants, nom, date, horaireDebut, horaireFin);
		// TODO Auto-generated constructor stub
	}

}
