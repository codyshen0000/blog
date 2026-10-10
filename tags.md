---
layout: page
title: 文章标签
permalink: /tags/
prose: false
---

<div class="blog-taxonomy">
  <div class="blog-tags-cloud">
    {% assign sorted_tags = site.tags | sort %}
    {% for tag in sorted_tags %}
      {% capture tag_name %}{{ tag | first }}{% endcapture %}
      <a href="#{{ tag_name }}" class="ds-tag">{{ tag_name }} ({{ site.tags[tag_name].size }})</a>
    {% endfor %}
  </div>

  <div class="blog-tag-groups">
    {% for tag in sorted_tags %}
      {% capture tag_name %}{{ tag | first }}{% endcapture %}
      <div class="blog-group" id="{{ tag_name }}">
        <h2>{{ tag_name }}</h2>
        <ul class="blog-entry-list">
          {% for post in site.tags[tag_name] %}
            <li>
              <span class="blog-post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
              {% if post.categories.size > 0 %}
                <small class="ds-muted">{{ post.categories | join: ', ' }}</small>
              {% endif %}
            </li>
          {% endfor %}
        </ul>
      </div>
    {% endfor %}
  </div>
</div>
