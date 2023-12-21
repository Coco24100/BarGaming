package bar.controller;

import java.util.ArrayList;
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

import bar.controller.dto.EmpruntResponse;
import bar.controller.dto.EventResponse;
import bar.dao.IDAOEvenement;
import bar.model.Emprunt;
import bar.model.Evenement;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/evenement")
public class EvenementRESTController {

	@Autowired
	private IDAOEvenement daoEvenement;
	
	
	@GetMapping("/{id}")
	public EventResponse findById(@PathVariable Integer id) 
	{
		Evenement event = daoEvenement.findById(id).get();
		EventResponse eventResp = new EventResponse();

		eventResp.fromEvenement(event);

		return eventResp;
		
	}
	
	@GetMapping
	public List<EventResponse> findAll() 
	{
		List<Evenement> events = daoEvenement.findAll();
		List<EventResponse> eventsResp = new ArrayList<>();

		for (Evenement event : events) {
			EventResponse eventResp = new EventResponse();
			eventResp.fromEvenement(event);
			eventsResp.add(eventResp);
		}
	
		return eventsResp;
		
	}
	
	
	@PostMapping
	public Evenement insert(@Valid @RequestBody Evenement evenement, BindingResult result) 
	{
		if(result.hasErrors()) 
		{
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La evenement n'est pas valide...");
		}
		return daoEvenement.save(evenement);
	}
	
	@PutMapping("/{id}")
	public Evenement update(@Valid @RequestBody Evenement evenement, BindingResult result) 
	{
		if(result.hasErrors()) 
		{
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La evenement n'est pas valide...");
		}
		return daoEvenement.save(evenement);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Integer id) 
	{
		daoEvenement.deleteById(id);
	}
	
	
}
