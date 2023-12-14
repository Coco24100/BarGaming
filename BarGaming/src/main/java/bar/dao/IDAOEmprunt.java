package bar.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import bar.model.Emprunt;

public interface IDAOEmprunt extends JpaRepository<Emprunt,Integer> {

}
