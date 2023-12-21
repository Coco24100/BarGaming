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

import bar.controller.dto.JeuxResponse;
import bar.controller.dto.JeuxResponse;
import bar.dao.IDAOJeux;
import bar.model.Jeux;
import bar.model.JeuxVideo;
import bar.model.Jeux;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/jeuxvideo")
public class JeuxVideoRESTController {

	@Autowired
	private IDAOJeux daoJeux;
	
	
	@GetMapping("/{id}")
	public JeuxResponse findById(@PathVariable Integer id) 
	{
		JeuxResponse response = new JeuxResponse() ;
		
		Optional<Jeux> opt = daoJeux.findById(id);
		if(opt.isEmpty()) 
		{
			return null;
		}
		
		response.fromJeux(opt.get());
		return response;
	}
	
	@GetMapping
	public List<JeuxResponse> findAll() 
	{
		
		List<JeuxResponse> jeux = new ArrayList<JeuxResponse>();
		
		List<JeuxVideo> j = daoJeux.findAllJeuxVideo();
		
		for(Jeux r : j)
		{
			JeuxResponse response = new JeuxResponse();
			response.fromJeux(r);
			jeux.add(response);
		}
		
		return jeux;
		
	}
	
	
	@PostMapping
	public JeuxVideo insert(@Valid @RequestBody JeuxVideo jeux, BindingResult result) 
	{
		if(result.hasErrors()) 
		{
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Le Jeux n'est pas valide...");
		}
		return daoJeux.save(jeux);
	}
	
	@PutMapping("/{id}")
	public JeuxVideo update(@Valid @RequestBody JeuxVideo jeux, BindingResult result) 
	{
		if(result.hasErrors()) 
		{
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Le Jeux n'est pas valide...");
		}
		return daoJeux.save(jeux);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Integer id) 
	{
		daoJeux.deleteById(id);
	}
	
	
}
