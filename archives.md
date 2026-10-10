---
layout: page
title: 归档
permalink: /archives/
prose: false
---

<div class="blog-archives">
  <p class="ds-muted">非常好! 目前共计 {{ site.posts.size }} 篇日志。继续努力。</p>

  {% assign posts_by_year = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}
  {% for year in posts_by_year %}
    <div class="blog-group">
      <h2 class="blog-year-title">{{ year.name }}</h2>
      <ul class="blog-entry-list">
        {% for post in year.items %}
          <li>
            <span class="blog-post-date">{{ post.date | date: "%m-%d" }}</span>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>
