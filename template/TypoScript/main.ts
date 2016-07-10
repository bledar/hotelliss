## PAGE ===============================================##
page = PAGE
page {
    typeNum = 0
    insertClassesFromRTE = 1

    10 = FLUIDTEMPLATE 
    10 {
        file.stdWrap.cObject = CASE
        file.stdWrap.cObject{
        key.data = levelfield:-1, backend_layout_next_level, slide
        key.override.field = backend_layout
        default = TEXT
        default.value = fileadmin/template/index.html
        2 = TEXT
        2.value = fileadmin/template/index.html
        3 = TEXT
        3.value = fileadmin/template/index2.html
      }  
    }
      
    
    includeCSS {
        sitestyle             = fileadmin/template/css/style.css
        sitestyle.media       = screen
        
    }
  
    includeJSlibs.jquery = https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js

     includeJS {
       file1 = fileadmin/template/js/script.js
       
     }

headTag (
  
  <head> 
  
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
  )
  
  
}

page.shortcutIcon = fileadmin/template/images/favicons/favicon.ico

page.meta.description.data = page:description
page.meta.keywords.data = page:keywords