package com.example.demo.presentation;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.PointService;

@RestController
@RequestMapping("/points")
public class PointController {
  private PointService service;

  public PointController(PointService service) {
    this.service = service;
  }

  @GetMapping("/calculate")
  public Long caclulate() {
    return this.service.caclulate();
  }
}
