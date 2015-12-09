(function () { var designJSON = {"name":"print","label":"WoodWing print style","version":"0.1.0","//":{"v1":{"components":"Hero, Image, Body, Footer, Intro, Subtitle, Title"},"v2":{"components":"Quote, Separator, Container"},"v3":{"components":"Slideshow, Crosshead, Headline"},"v4":{"components":"Embed, Author"}},"author":"WoodWing Software","assets":{"css":["design.css"],"js":["vendor.js"]},"wrapper":"<div class='doc-section'></div>","componentProperties":{"position":{"label":"{{ 'DESIGN_PROPERTY_POSITION_LABEL' | translate }}","type":"select","options":[{"caption":"{{ 'DESIGN_PROPERTY_POSITION_MIDDLE_LABEL' | translate }}"},{"caption":"{{ 'DESIGN_PROPERTY_POSITION_LEFT_LABEL' | translate }}","value":"_left"},{"caption":"{{ 'DESIGN_PROPERTY_POSITION_RIGHT_LABEL' | translate }}","value":"_right"}]},"large":{"label":"{{ 'DESIGN_PROPERTY_POSITION_LABEL' | translate }}","type":"select","options":[{"caption":"{{ 'DESIGN_PROPERTY_POSITION_MIDDLE_LABEL' | translate }}"},{"caption":"{{ 'DESIGN_PROPERTY_POSITION_LEFT_LABEL' | translate }}","value":"_left"},{"caption":"{{ 'DESIGN_PROPERTY_POSITION_RIGHT_LABEL' | translate }}","value":"_right"}]},"inside-caption":{"label":"{{ 'DESIGN_PROPERTY_CAPTION_LABEL' | translate }}","type":"select","options":[{"caption":"{{ 'DESIGN_PROPERTY_CAPTION_OUTSIDE' | translate }}"},{"caption":"{{ 'DESIGN_PROPERTY_CAPTION_NONE' | translate }}","value":"_caption-none"},{"caption":"{{ 'DESIGN_PROPERTY_CAPTION_BOTTOM' | translate }}","value":"_caption-inside"},{"caption":"{{ 'DESIGN_PROPERTY_CAPTION_TOP' | translate }}","value":"_caption-top"},{"caption":"{{ 'DESIGN_PROPERTY_CAPTION_TOP_LEFT' | translate }}","value":"_caption-top-left"},{"caption":"{{ 'DESIGN_PROPERTY_CAPTION_TOP_RIGHT' | translate }}","value":"_caption-top-right"},{"caption":"{{ 'DESIGN_PROPERTY_CAPTION_BOTTOM_LEFT' | translate }}","value":"_caption-bottom-left"},{"caption":"{{ 'DESIGN_PROPERTY_CAPTION_BOTTOM_RIGHT' | translate }}","value":"_caption-bottom-right"}]},"fixed-background":{"label":"{{ 'DESIGN_PROPERTY_FIXED_BACKGROUND_LABEL' | translate }}","type":"option","value":"_fixed-background"},"drop-capital":{"label":"{{ 'DESIGN_PROPERTY_DROP_LABEL_LABEL' | translate }}","type":"option","value":"_drop-cap"},"style":{"label":"{{ 'DESIGN_PROPERTY_STYLE_LABEL' | translate }}","type":"select","options":[{"caption":"{{ 'DESIGN_STYLES_DEFAULT_LABEL' | translate }}"},{"caption":"{{ 'DESIGN_PROPERTY_STYLE_OPTION_LABEL' | translate }} 1","value":"_option1"},{"caption":"{{ 'DESIGN_PROPERTY_STYLE_OPTION_LABEL' | translate }} 2","value":"_option2"},{"caption":"{{ 'DESIGN_PROPERTY_STYLE_OPTION_LABEL' | translate }} 3","value":"_option3"}]},"fitting":{"label":"{{ 'DESIGN_PROPERTY_FITTING_LABEL' | translate }}","type":"select","options":[{"caption":"{{ 'DESIGN_PROPERTY_FITTING_CONTENT_TO_FRAME_LABEL' | translate }}"},{"caption":"{{ 'DESIGN_PROPERTY_FITTING_FRAME_TO_CONTENT_LABEL' | translate }}","value":"_fit-frame-to-content"},{"caption":"{{ 'DESIGN_PROPERTY_FITTING_FRAME_HEIGHT_TO_CONTENT_LABEL' | translate }}","value":"_fit-frame-height-to-content"}]},"slideshow-inside-caption":{"label":"{{ 'DESIGN_PROPERTY_CAPTION_LABEL' | translate }}","type":"select","options":[{"caption":"{{ 'DESIGN_PROPERTY_CAPTION_OUTSIDE' | translate }}"},{"caption":"{{ 'DESIGN_PROPERTY_CAPTION_NONE' | translate }}","value":"_caption-none"},{"caption":"{{ 'DESIGN_PROPERTY_CAPTION_BOTTOM' | translate }}","value":"_caption-inside"},{"caption":"{{ 'DESIGN_PROPERTY_CAPTION_TOP' | translate }}","value":"_caption-top"},{"caption":"{{ 'DESIGN_PROPERTY_CAPTION_TOP_LEFT' | translate }}","value":"_caption-top-left"},{"caption":"{{ 'DESIGN_PROPERTY_CAPTION_TOP_RIGHT' | translate }}","value":"_caption-top-right"},{"caption":"{{ 'DESIGN_PROPERTY_CAPTION_BOTTOM_LEFT' | translate }}","value":"_caption-bottom-left"},{"caption":"{{ 'DESIGN_PROPERTY_CAPTION_BOTTOM_RIGHT' | translate }}","value":"_caption-bottom-right"}]},"slideshow-play-orientation":{"label":"{{ 'DESIGN_PROPERTY_SLIDESHOW_PLAY_ORIENTATION_LABEL' | translate }}","type":"select","options":[{"caption":"{{ 'DESIGN_PROPERTY_SLIDESHOW_PLAY_ORIENTATION_OPTION_HORIZONTAL' | translate }}"},{"caption":"{{ 'DESIGN_PROPERTY_SLIDESHOW_PLAY_ORIENTATION_OPTION_VERTICAL' | translate }}","value":"_vertical"}]},"slideshow-autoplay":{"label":"{{ 'DESIGN_PROPERTY_SLIDESHOW_AUTO_PLAY_LABEL' | translate }}","type":"option","value":"_auto-play"},"slideshow-filmstrip":{"label":"{{ 'DESIGN_PROPERTY_SLIDESHOW_FILMSTRIP_LABEL' | translate }}","type":"option","value":"_filmstrip"},"disable-fullscreen":{"label":"{{ 'DESIGN_PROPERTY_DISABLE_FULLSCREEN_LABEL' | translate }}","type":"option","value":"_disable-fullscreen"},"grid-option":{"label":"Make it beautiful","type":"option","value":"_testValue"}},"groups":[{"label":"{{ 'DESIGN_GROUP_TITLE_LABEL' | translate }}","name":"title","components":["title","subtitle","headline","hero"]},{"label":"{{ 'DESIGN_GROUP_TEXT_LABEL' | translate }}","name":"text","components":["intro","body","footer","quote","separator","crosshead","author"]},{"label":"{{ 'DESIGN_GROUP_MEDIA_LABEL' | translate }}","name":"media","components":["slideshow","grid","image","embed","product"]},{"label":"{{ 'DESIGN_GROUP_LAYOUT_LABEL' | translate }}","name":"layout","components":["container"]}],"defaultComponents":{"paragraph":"body","image":"image"},"defaultContent":[{"component":"hero"},{"component":"intro"},{"component":"body"}],"prefilledComponents":{},"metadata":[{"identifier":"title","type":"text","matches":[]},{"identifier":"description","type":"text","matches":[]}],"//conversionRulesComment":"'auto' means auto, 'simple' means specified mapping","conversionRules":{"body":{"title":"auto","subtitle":"auto","headline":{"type":"simple","map":{"title":"text"}},"hero":{"type":"simple","map":{"title":"text"}},"intro":"auto","footer":"auto","quote":"auto","crosshead":"auto","author":"auto","image":"auto","product":{"type":"simple","map":{"description":"text"}}},"title":{"subtitle":"auto","headline":{"type":"simple","map":{"title":"text"}},"hero":{"type":"simple","map":{"title":"text"}},"intro":"auto","body":"auto","footer":"auto","quote":"auto","crosshead":"auto","image":"auto","product":{"type":"simple","map":{"product_title":"text"}}},"subtitle":{"title":"auto","headline":{"type":"simple","map":{"subtitle":"title"}},"hero":{"type":"simple","map":{"subtitle":"title"}},"intro":"auto","body":"auto","footer":"auto","quote":"auto","crosshead":"auto","image":"auto","product":{"type":"simple","map":{"product_title":"title"}}},"headline":{"hero":{"type":"simple","map":{"title":"title","subtitle":"subtitle","author":"section"}}},"intro":{"title":"auto","subtitle":"auto","headline":{"type":"simple","map":{"subtitle":"text"}},"hero":{"type":"simple","map":{"subtitle":"text"}},"body":"auto","footer":"auto","quote":"auto","crosshead":"auto","image":"auto","product":{"type":"simple","map":{"product_title":"text"}}},"footer":{"title":"auto","subtitle":"auto","headline":{"type":"simple","map":{"subtitle":"text"}},"hero":{"type":"simple","map":{"subtitle":"text"}},"intro":"auto","body":"auto","quote":"auto","crosshead":"auto","image":"auto","product":{"type":"simple","map":{"product_title":"text"}}},"crosshead":{"title":"auto","subtitle":"auto","headline":{"type":"simple","map":{"subtitle":"text"}},"hero":{"type":"simple","map":{"subtitle":"text"}},"intro":"auto","body":"auto","footer":"auto","quote":"auto","image":"auto","product":{"type":"simple","map":{"product_title":"text"}}},"slideshow":{"image":{"type":"from-container","container":"slideshow"}},"image":{"hero":"auto","author":"auto","slideshow":{"type":"to-container","container":"slideshow"},"product":"auto"}},"components":[{"name":"container","html":"<div class=\"container\" doc-container=\"main\" data-doc-label=\"{{ DESIGN_COMPONENT_CONTAINER_LABEL }}\"></div>","allowedParents":["root"],"label":"{{ 'DESIGN_COMPONENT_CONTAINER_LABEL' | translate }}","properties":["style","position"]},{"name":"embed","html":"<div class=\"embed\" data-doc-label=\"{{ DESIGN_COMPONENT_EMBED_LABEL }}\"><div doc-html=\"html\"></div></div>","label":"{{ 'DESIGN_COMPONENT_EMBED_LABEL' | translate }}","properties":["style"]},{"name":"grid","html":"<div class=\"grid\"><div class=\"grid-container\" doc-container=\"grid\"></div><ul class=\"grid-list\"><li class=\"position-highlight\"><div class=\"inner\"></div></li></ul></div>","label":"Grid","properties":["grid-option"],"directives":{"grid":{"allowedChildren":["image"]}}},{"name":"product","html":"<div class=\"product\" default-text-field=\"product_title\"><figure class=\"product-image-part\"><img doc-image=\"image\"></figure><div class=\"product-text-part\"><h1 doc-editable=\"product_title\">{{ DESIGN_PRODUCT_TITLE_PLACEHOLDER }}</h1><p doc-editable=\"description\">{{ DESIGN_PRODUCT_DESCRIPTION_PLACEHOLDER }}</p><h2 doc-editable=\"price\">{{ DESIGN_PRODUCT_PRICE_PLACEHOLDER }}</h2><h3 doc-editable=\"link\">{{ DESIGN_PRODUCT_LINK_PLACEHOLDER }}</h3></div></div>","label":"{{ 'DESIGN_COMPONENT_PRODUCT_LABEL' | translate }}","properties":["position","style"]},{"name":"image","html":"<figure class=\"image\"><div doc-image=\"image\"></div><figcaption doc-editable=\"caption\">Image caption, sem vel consectetur dignissim, quam felis molestie lorem, eget posuere felis turpis vitae odio.</figcaption></figure>","label":"{{ 'IMAGE_EDITOR_LABEL' | translate }}","properties":["fitting","position","style","inside-caption","disable-fullscreen"]},{"name":"slideshow","html":"<div class=\"slideshow\"><div class=\"slideshow-container\"><div u=\"slides\" class=\"slides\" doc-container=\"slideshow\"></div><span u=\"arrowleft\" class=\"arrow _left\"></span> <span u=\"arrowright\" class=\"arrow _right\"></span><div u=\"thumbnavigator\" class=\"thumbnavigator\"><div u=\"slides\" class=\"thumbslides\"><div u=\"prototype\" class=\"thumbproto\"><div class=\"thumb-w\"><div u=\"thumbnailtemplate\" class=\"thumb-t\"></div></div><div class=\"thumb-c\"></div></div></div></div></div></div>","label":"{{ 'DESIGN_COMPONENT_SLIDESHOW_LABEL' | translate }}","properties":["slideshow-inside-caption","slideshow-play-orientation","slideshow-autoplay","slideshow-filmstrip","disable-fullscreen"],"directives":{"slideshow":{"allowedChildren":["image|required:image"]}}},{"name":"author","html":"<div class=\"author\" default-text-field=\"name\"><figure class=\"author-image\"><div doc-image=\"image\"></div></figure><div class=\"info-block\"><div class=\"author-row\"><span class=\"name\" doc-editable=\"name\">{{ DESIGN_AUTHOR_NAME_PLACEHOLDER }}</span><div class=\"sep_name_loc\"></div><span class=\"location\" doc-editable=\"location\">{{ DESIGN_AUTHOR_LOCATION_PLACEHOLDER }}</span></div><div class=\"author-row\"><span class=\"link\" doc-link=\"link-url\" doc-editable=\"link\">{{ DESIGN_AUTHOR_LINK_PLACEHOLDER }}</span></div></div></div>","label":"{{ 'DESIGN_COMPONENT_AUTHOR_LABEL' | translate }}","properties":["style"]},{"name":"body","html":"<p class=\"text body\" doc-editable=\"text\">{{BODY_EDITOR_PLACEHOLDER | translate}}</p>","label":"{{ 'BODY_EDITOR_LABEL' | translate }}","properties":["drop-capital","style"]},{"name":"footer","html":"<h2 class=\"text footer\" doc-editable=\"text\">{{FOOTER_EDITOR_PLACEHOLDER | translate}}</h2>","label":"{{ 'FOOTER_EDITOR_LABEL' | translate }}","properties":["style"]},{"name":"crosshead","html":"<h3 class=\"text crosshead\" doc-editable=\"text\">{{CROSS_HEAD_EDITOR_LABEL | translate}}</h3>","label":"{{ 'CROSS_HEAD_EDITOR_LABEL' | translate }}","properties":["style"]},{"name":"intro","html":"<h2 class=\"text intro\" doc-editable=\"text\">{{INTRO_EDITOR_PLACEHOLDER | translate}}</h2>","label":"{{ 'INTRO_EDITOR_LABEL' | translate }}","properties":["style"]},{"name":"quote","html":"<blockquote><p><span class=\"quotation-mark\"></span> <span class=\"quote\" doc-editable=\"text\">Quote, lorem ipsum dolor sit amet, consetetur sadipscing elitr.</span></p><footer doc-editable=\"author\">Miss Lorem Ipsum</footer></blockquote>","label":"{{ 'DESIGN_COMPONENT_QUOTE_LABEL' | translate }}","properties":["large","style"]},{"name":"separator","html":"<hr class=\"separator\">","label":"{{ 'DESIGN_COMPONENT_SEPARATOR_LABEL' | translate }}","properties":["style"]},{"name":"headline","html":"<div class=\"headline\"><h3 class=\"section\" doc-editable=\"section\">{{ SECTION_EDITOR_PLACEHOLDER }}</h3><h1 class=\"title\" doc-editable=\"title\">{{ TITLE_EDITOR_PLACEHOLDER }}</h1><h2 class=\"subtitle\" doc-editable=\"subtitle\">{{ SUB_TITLE_EDITOR_PLACEHOLDER }}</h2></div>","label":"{{ 'DESIGN_COMPONENT_HEADLINE_LABEL' | translate }}","properties":["style"]},{"name":"hero","html":"<div class=\"hero\"><figure><div doc-image=\"image\"><div><figcaption><h1 doc-editable=\"title\">{{ TITLE_EDITOR_PLACEHOLDER }}</h1><h2 doc-editable=\"subtitle\">{{ SUB_TITLE_EDITOR_PLACEHOLDER }}</h2><h3 doc-editable=\"author\">{{ SUB_AUTHOR_EDITOR_PLACEHOLDER }}</h3></figcaption></div></div></figure></div>","label":"{{ 'HERO_EDITOR_LABEL' | translate }}","allowedParents":["root"],"properties":["fixed-background","style"]},{"name":"title","html":"<h2 class=\"text title\" doc-editable=\"text\">{{ TITLE_EDITOR_PLACEHOLDER }}</h2>","label":"{{ 'TITLE_EDITOR_LABEL' | translate }}","properties":["style"]},{"name":"subtitle","html":"<h2 class=\"text subtitle\" doc-editable=\"title\">{{ SUB_TITLE_EDITOR_PLACEHOLDER }}</h2>","label":"{{ 'SUB_TITLE_EDITOR_LABEL' | translate }}","properties":["style"]}]}; if(typeof module !== 'undefined' && module.exports) {return module.exports = designJSON;} else { this.design = this.design || {}; this.design.print = designJSON;} }).call(this);