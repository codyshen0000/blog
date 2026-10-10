---
layout: page
title: 文章分类
permalink: /categories/
---

<div class="categories-page">
  {% for category in site.categories %}
    <div class="category-group">
      {% capture category_name %}{{ category | first }}{% endcapture %}
      <h2 id="{{ category_name }}">{{ category_name }}</h2>
      <ul class="entry-list">
        {% for post in site.categories[category_name] %}
          <li>
            <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            {% if post.tags.size > 0 %}
              <span class="tag-row">
                {% for tag in post.tags %}
                  <a class="tag" href="{{ '/tags/' | relative_url }}#{{ tag | url_encode }}">{{ tag }}</a>
                {% endfor %}
              </span>
            {% endif %}
          </li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>
