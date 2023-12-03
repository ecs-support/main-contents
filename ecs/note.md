

## Tags

```html
    <div class="tags is-pulled-left py-2 bottom-left ">
      {{ range .Params.tags }}
      <a class="tag is-warning text-dark rounded-lg py-1 px-2" href="/tags/{{ . | urlize}}">{{ . }}</a>
      {{ end }}
    </div>    
```
```html
<a href="#" class="badge badge-warning">Warning</a>
    </div>    
```
### Sample Blog Post Card
```html
  <div class="wrapper">
        <div class="card">
            <div class="card-banner">
                <p class="category-tag popular">Pizza</p>
                <img class="banner-img"
                    src='https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xna5h3bfbgmyrb6py1o7.jpg' alt=''>
            </div>
            <div class="card-body">
                <p class="blog-hashtag">#Food #Pizza</p>
                <h2 class="blog-title">What is the tastiest pizza in Pizza Hut?</h2>
                <p class="blog-description">My thoughts on the future of front end web development</p>

                <div class="card-profile">
                    <img class="profile-img"
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYJQKSoM7S75P_KMRtQHqAAIPh133CSxByw&usqp=CAU'
                        alt=''>
                    <div class="card-profile-info">
                        <h3 class="profile-name">Eleanor Pea</h3>
                        <p class="profile-followers">5.2k followers</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
```