package bar.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import bar.controller.dto.ReservationResponse;
import bar.dao.IDAOReservation;
import bar.model.Reservation;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/reservation")
@CrossOrigin(origins = "*" )
public class ReservationRestController {
	@Autowired
	private IDAOReservation daoReservation;
	
	
	@GetMapping("/{id}")
	public ReservationResponse findById(@PathVariable Integer id) 
	{
		ReservationResponse response = new ReservationResponse() ;
		Optional<Reservation> opt = daoReservation.findById(id);
		if(opt.isEmpty()) 
		{
			return null;
		}
		
		response.fromReservation(opt.get());
		return response;
	}
	
	@GetMapping
	public List<ReservationResponse> findAll() 
	{
		List<ReservationResponse> reservations = new ArrayList<ReservationResponse>();
		
		List<Reservation> res = daoReservation.findAll();
		
		for(Reservation r : res)
		{
			ReservationResponse response = new ReservationResponse();
			response.fromReservation(r);
			
			reservations.add(response);
		}
		
		return reservations;
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
