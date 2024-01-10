package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.repository.PointRepository;
import com.example.demo.service.dto.PointDto;

@Service
public class PointService {
  private final PointRepository repository;

  public PointService(PointRepository repository){
    this.repository = repository;
  }

  public Long caclulate() {
    Long result = 0L;
    List<PointDto> points = this.repository.findAll();

    for (Integer i = 0; i < points.size(); i++) {
      for (Integer j = 0; j < points.size(); j++) {
        PointDto pointA = points.get(i);
        PointDto pointB = points.get(j);

        result += pointA.getX() + pointA.getY() + pointB.getX() + pointB.getY();
      }
    }

    return result;
  }
}
