package com.axisbankathon.server.controller;

import com.axisbankathon.server.constants.APIconstants;
import com.axisbankathon.server.dto.PostDTO;
import com.axisbankathon.server.model.PostModel;
import com.axisbankathon.server.service.PostService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
@CrossOrigin

public class PostController {

    final PostService postService;


@PostMapping(APIconstants.SAVE_POST)
    public PostModel savePost(@Valid @RequestBody PostDTO PostDTORequest){
        log.info("Saving post #####");

        return this.postService.savePost(PostDTORequest);
    }
    @GetMapping (APIconstants.GET_ALL_POST)
    public List<PostModel> getAllPosts(){
        log.info("Getting all the posts #####");
        return this.postService.getAllposts();
    }
}
