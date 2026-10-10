---
layout: page
title: 归档
permalink: /archives/
---

<div class="archives-container">
  <p class="archives-stats">非常好! 目前共计 {{ site.posts.size }} 篇日志。继续努力。</p>

  {% assign posts_by_year = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}
  {% for year in posts_by_year %}
    <div class="year-section">
      <h2 class="year-title">{{ year.name }}</h2>
      <ul class="entry-list">
        {% for post in year.items %}
          <li>
            <span class="post-date">{{ post.date | date: "%m-%d" }}</span>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>
