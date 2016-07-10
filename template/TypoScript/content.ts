content = CONTENT
content{
    table = tt_content
    select.where = colPos = 2
    select.orderBy = sorting
    select.languageField = sys_language_uid
    current = 1
    wrap = <div class="normalContent">|</div>
}

lib.slider = CONTENT
lib.slider < styles.content.get
lib.slider.select.where = colPos=1 

lib.RightContentHome = CONTENT
lib.RightContentHome < styles.content.get
lib.RightContentHome.select.where = colPos=3
lib.RightContentHome {
        current = 1
        wrap = <div class="rightContent">|</div>    
}

tt_content.gridelements_pi1.20.10.setup {
    1 < lib.gridelements.defaultGridSetup
        1 {
        wrap = <div class="news cf">|</div>  
        columns {
            1 < .default
            1.wrap = <div class="item-news column1">|</div>

            2 < .default
            2.wrap = <div class="item-news column2">|</div>
            
            3 < .default
            3.wrap = <div class="item-news column3">|</div>
            
            4 < .default
            4.wrap = <div class="item-news column4">|</div>  
            
            5 < .default
            5.wrap = <div class="item-news column5">|</div>

            6 < .default
            6.wrap = <div class="item-news column6">|</div>  
        }
    }
}
lib.bottomContent = CONTENT
lib.bottomContent < styles.content.get
lib.bottomContent.select.where = colPos=6
lib.bottomContent{
    current = 1
    wrap = <div class="bottom-wraper">|</div>    
}
tt_content.gridelements_pi1.20.10.setup {
    2 < lib.gridelements.defaultGridSetup
        2 {
        wrap = <section class="bottom-content cf">|</section>  
        columns {
            10 < .default
            10.wrap = <div class="col col1">|</div>

            11 < .default
            11.wrap = <div class="col col2">|</div>
        }
    }
}
tt_content.gridelements_pi1.20.10.setup {
    3 < lib.gridelements.defaultGridSetup
        3 {
        wrap = <section class="gallery-content cf">|</section>
    }
}
lib.footer = CONTENT
lib.footer < styles.content.get
lib.footer{
    select.where = colPos=7
    select.pidInList = 28
}
