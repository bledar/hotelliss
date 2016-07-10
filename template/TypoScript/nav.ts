mainmenu= HMENU
mainmenu{
    1 = TMENU
    1{
        expAll = 1
        NO = 1 
        NO.wrapItemAndSub = <ul class="menu"><li class="first">|</li>|*|<li>|</li>|*|<li class="last">|</li></ul>
        
        ACT = 1
        ACT.wrapItemAndSub = <ul class="menu"><li class="first active">|</li>|*|<li class="active">|</li>|*|<li class="last active">|</li></ul>
        
        IFSUB = 1
        IFSUB.wrapItemAndSub=<ul class="menu"><li class="first have-sub">|</li>|*|<li class="have-sub">|</li>|*|<li class="last have-sub">|</li></ul>
 
        ACTIFSUB = 1
        ACTIFSUB.wrapItemAndSub=<ul class="menu"><li class="first have-sub active">|</li>|*|<li class="have-sub active">|</li>|*|<li class="last have-sub active">|</li></ul>
    }
    2 = TMENU
    2{  
        expAll = 1
        wrap = <div class="sub-menu"><ul>|</ul></div>
        NO.wrapItemAndSub = <li class="first">|</li>|*|<li>|</li>|*|<li class="last">|</li>
        ACT = 1
        ACT.wrapItemAndSub = <li class="active first">|</li>|*|<li class="active">|</li>|*|<li class="active last">|</li>
    }
}