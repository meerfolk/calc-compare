package com.example.demo.service.dto;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "point")
public class PointDto {
  @Id
  private String id;
  private Integer x;
  private Integer y;

  public PointDto(String id, Integer x, Integer y) {
    this.id = id;
    this.x = x;
    this.y = y;
  }

  public Integer getX() {
    return this.x;
  }

  public Integer getY() {
    return this.y;
  }
}
