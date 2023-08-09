package com.axisbankathon.server.dao;

import com.axisbankathon.server.model.PostModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostDao extends MongoRepository<PostModel,String> {
}
