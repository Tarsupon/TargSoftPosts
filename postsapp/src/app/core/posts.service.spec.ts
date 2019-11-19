import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostsService } from './posts.service';
import { Post } from '../shared/models/post';

describe('PostsService -- testing http get request', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService]
    });

    httpTestingController = TestBed.get(HttpTestingController);

  });

  it('can test HttpClient.get', () => {
    const data = {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    };

    const service: PostsService = TestBed.get(PostsService);

    service.getPosts().pipe().subscribe((response: Post[]) => {

      expect(response[0].body).toBe(data.body);
    });

    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts');

    expect(req.request.method).toBe('GET');

    req.flush(data);
  });

  afterEach(() => httpTestingController.verify());

});
