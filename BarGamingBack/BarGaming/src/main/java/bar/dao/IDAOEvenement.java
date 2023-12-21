package bar.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import bar.model.Evenement;

public interface IDAOEvenement extends JpaRepository<Evenement,Integer> {

}
