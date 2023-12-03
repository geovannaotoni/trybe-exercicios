package com.trybe.podcasts;

import java.util.Random;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/podcasts")
public class PodcastRestController {
  @GetMapping
  public String getRoot() {
    return "Yay Podcasts!";
  }

//  @GetMapping("/{id}")
//  public String getPodcast(@PathVariable Integer id) {
//    return String.format("Você pediu pelo Podcast com id: %d", id);
//  }
//  public Podcast getPodcast(@PathVariable Integer id) {
//    Podcast result = new Podcast();
//    result.setId(id);
//    result.setName("Meu podcast");
//    result.setUrl("http://www.meupodcast.com.br");
//    return result;
//  }
//  public ResponseEntity<Podcast> getPodcast(@PathVariable Integer id) {
//    if (id > 1000)
//      return ResponseEntity.notFound().build();
//
//    Podcast result = new Podcast();
//    result.setId(id);
//    result.setName("Meu podcast");
//    result.setUrl("http://www.meupodcast.com.br");
//
//    return ResponseEntity.ok(result);
//  }

  @GetMapping("/search")
  public String searchPodcast(@RequestParam String title) {
    return String.format("Você buscou por Podcasts com o título: %s", title);
  }

//  @PostMapping
//  public ResponseEntity<Podcast> newPodcast(@RequestBody Podcast newPodcast) {
//    // Vamos fingir que estamos salvando o podcast
//    // ao atribuir um ID aleatório a ele
//    newPodcast.setId(new Random().nextInt(0, 1000));
//
//    return ResponseEntity.status(HttpStatus.CREATED).body(newPodcast);
//  }

  private PodcastService service;

  @Autowired
  public PodcastRestController(PodcastService service) {
    this.service = service;
  }

  @GetMapping("/{id}")
  public ResponseEntity<PodcastDto> getPodcast(@PathVariable Integer id) {
    if (id > 1000)
      return ResponseEntity.notFound().build();

    Podcast podcast = service.findPodcastById(id);

    PodcastDto podcastDto = new PodcastDto(
        podcast.getId(), podcast.getName(), podcast.getUrl()
    );

    return ResponseEntity.ok(podcastDto);
  }

  @PostMapping
  public ResponseEntity<PodcastDto> newPodcast(@RequestBody PodcastCreationDto newPodcast) {
    Podcast podcast = service.createPodcast(newPodcast);

    PodcastDto podcastDto = new PodcastDto(
        podcast.getId(), podcast.getName(), podcast.getUrl()
    );

    return ResponseEntity.status(HttpStatus.CREATED).body(podcastDto);
  }
}
