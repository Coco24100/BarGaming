package bar.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import bar.dao.IDAOReservation;
import bar.model.Reservation;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/reservation")
public class ReservationRestController {
	@Autowired
	private IDAOReservation daoReservation;
	
	
	@GetMapping("/{id}")
	public Reservation findById(@PathVariable Integer id) 
	{
		Optional<Reservation> opt = daoReservation.findById(id);
		if(opt.isEmpty()) 
		{
			return null;
		}
		return (Reservation) opt.get();
	}
	
	@GetMapping
	public List<Reservation> findAll() 
	{
		return daoReservation.findAll();
	}
	
	
	@PostMapping
	public Reservation insert(@Valid @RequestBody Reservation reservation, BindingResult result) 
	{
		if(result.hasErrors()) 
		{
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La reservation n'est pas valide...");
		}
		return daoReservation.save(reservation);
	}
	
	@PutMapping("/{id}")
	public Reservation update(@Valid @RequestBody Reservation reservation, BindingResult result) 
	{
		if(result.hasErrors()) 
		{
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La reservation n'est pas valide...");
		}
		return daoReservation.save(reservation);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Integer id) 
	{
		daoReservation.deleteById(id);
	}
	
	
	
	
}
