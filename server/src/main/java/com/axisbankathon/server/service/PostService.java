package com.axisbankathon.server.service;

import com.axisbankathon.server.dto.PostDTO;
import com.axisbankathon.server.model.PostModel;

import java.util.List;

public interface PostService {

    public PostModel savePost (PostDTO postDTO);

    public List<PostModel> getAllposts();
}
