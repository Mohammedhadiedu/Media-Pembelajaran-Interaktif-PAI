window.globalProvideData('slide', '{"title":"SOAL 2","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":14,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide14","width":1280,"height":720,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"5WJUnrAYjb1","actionGroups":{"ReviewInt_6my53Neax8p":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5opgL83Gq2y"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6q1klY10qVS.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6my53Neax8p_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6my53Neax8p_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6my53Neax8p","typea":"var","valueb":"5iLYrXZOYm3","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5iLYrXZOYm3.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6my53Neax8p"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5iLYrXZOYm3.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6my53Neax8p"}]}]}]},"ReviewIntCorrectIncorrect_6my53Neax8p":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6my53Neax8p_ReviewShape"}}]},"AnsweredInt_6my53Neax8p":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6my53Neax8p"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"DisableChoices_6my53Neax8p":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5opgL83Gq2y"},"enabled":{"type":"boolean","value":false}}]},"6my53Neax8p_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6q1klY10qVS.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.5iLYrXZOYm3.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6my53Neax8p"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6q1klY10qVS.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6q1klY10qVS.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6my53Neax8p"}]}]}]}]},"SetLayout_pxabnsnfns00000000101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"NavigationRestrictionNextSlide_5WJUnrAYjb1":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6Zk4w2dIsbV"}}]},"NavigationRestrictionPreviousSlide_5WJUnrAYjb1":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000101"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6MS4ZWLqmdv","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6MS4ZWLqmdv","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6my53Neax8p","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6my53Neax8p"}],"elseActions":[{"kind":"exe_actiongroup","id":"6my53Neax8p_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6my53Neax8p","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6my53Neax8p","typea":"var","valueb":"5iLYrXZOYm3","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5iLYrXZOYm3"},"completed_slide_ref":{"type":"string","value":"_player.6F9yrRk0jYe.5i7N2pUI167"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6my53Neax8p","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6my53Neax8p","typea":"var","valueb":"5iLYrXZOYm3","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5iLYrXZOYm3"},"completed_slide_ref":{"type":"string","value":"_player.6F9yrRk0jYe.5i7N2pUI167"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5WJUnrAYjb1"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5WJUnrAYjb1"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":99,"id":"5c1Q0IKmKo8"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5dWTDi0F6Uz"}},{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"6my53Neax8p_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5opgL83Gq2y"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5WRoq81htJ4"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5rIu28ZV6pa"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":58,"id":"01","url":"story_content/6kwtscbCFnD_80_DX2560_DY2560.jpg","type":"normal","altText":"BACKGROUND BASIC 4.jpg","width":2046,"height":1151,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":360,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1280,"bottom":720,"altText":"BACKGROUND BASIC 4.jpg","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":1280,"height":720,"strokewidth":0}},"width":1280,"height":720,"resume":true,"useHandCursor":true,"id":"5dWTDi0F6Uz"},{"kind":"textinput","bindto":"_player.TextEntry1","align":"center","verticalAlign":"top","rtl":false,"numeric":false,"multiline":true,"maxchars":0,"placeholder":". . . . . . . . .","fontsize":29,"textcolor":"0x000000","bold":false,"italic":false,"font":"Open Sans Charset0_v9TY33EDE6F2","marginleft":17,"marginright":17,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":114,"yPos":388,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":525.5,"rotateYPos":56.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"5opgL83Gq2y","linkId":"","type":"vectortext","xPos":17,"yPos":8,"xAccOffset":0,"yAccOffset":0,"width":1018,"height":113,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":573,"bottom":39,"pngfb":false,"pr":{"l":"Lib","i":126}}},"html5data":{"xPos":0,"yPos":0,"width":1053,"height":114,"strokewidth":1}},"width":1052,"height":114,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":1054,"bottom":115,"altText":". . . . . . . . .","pngfb":false,"pr":{"l":"Lib","i":125}}},"id":"5opgL83Gq2y","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry1","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"eval_interaction","id":"_parent.6q1klY10qVS"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5WRoq81htJ4_291070862","id":"01","linkId":"txt__default_5WRoq81htJ4","type":"acctext","xPos":17,"yPos":8,"xAccOffset":17,"yAccOffset":8,"width":1118,"height":103,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Isilah dengan jawaban yang tepat\\n","style":{"fontSize":28.444,"fontIsBold":false,"fontFamily":"\\"Open SansBold CharsBoldE47A47C6\\",\\"Open Sans\\"","ascent":40.536,"descent":11.111,"leading":0,"underlinePosition":-2.852,"underlineThickness":1.889,"xHeight":20.703}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":33,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"Tolong sebutkan isi kandungan dari  Q.S. Ar-Rum/30: 41","style":{"fontSize":28.444,"fontIsBold":false,"fontFamily":"\\"Open SansBold CharsBoldE47A47C6\\",\\"Open Sans\\"","ascent":40.536,"descent":11.111,"leading":0,"underlinePosition":-2.852,"underlineThickness":1.889,"xHeight":20.703}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":54,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":32.889,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":1062,"bottom":112,"pngfb":false,"pr":{"l":"Lib","i":128}}}],"shapemaskId":"","xPos":64,"yPos":30,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":576,"rotateYPos":59.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1152,"bottom":119,"altText":"Isilah dengan jawaban yang tepat\\nTolong sebutkan isi kandungan dari  Q.S. Ar-Rum/30: 41","pngfb":false,"pr":{"l":"Lib","i":127}},"html5data":{"xPos":0,"yPos":0,"width":1152,"height":119,"strokewidth":0}},"width":1152,"height":119,"resume":true,"useHandCursor":true,"id":"5WRoq81htJ4"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5fQXNAbZIFR_569852925","id":"01","linkId":"txt__default_5rIu28ZV6pa","type":"acctext","xPos":7,"yPos":3,"xAccOffset":7,"yAccOffset":3,"width":242,"height":65,"valign":"center","wordwrap":true,"textshadow":true,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"SUBMIT","style":{"fontFamily":"\\"Open SansBold CharsBoldE47A47C6\\",\\"Open Sans\\"","ascent":35.47,"descent":9.722,"leading":0,"underlinePosition":-2.495,"underlineThickness":1.653,"xHeight":18.116,"fontIsBold":false}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":6,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":24.889,"fontIsBold":true,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"shadow":{"offsetX":0.8,"offsetY":0.8,"color":"#969696"},"foregroundColor":"#FFFFFF","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":193,"bottom":59,"pngfb":false,"pr":{"l":"Lib","i":135}}}],"shapemaskId":"","xPos":939,"yPos":587,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":128,"rotateYPos":35.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":256,"bottom":72,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":129}},"html5data":{"xPos":0,"yPos":0,"width":256,"height":72,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":256,"bottom":72,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":129}},"html5data":{"xPos":-1,"yPos":-1,"width":257,"height":73,"strokewidth":0}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-5,"top":-5,"right":261,"bottom":76,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":130}},"html5data":{"xPos":-5,"yPos":-5,"width":266,"height":81,"strokewidth":5}}},{"kind":"state","name":"_default_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":256,"bottom":72,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":129}},"html5data":{"xPos":-1,"yPos":-1,"width":257,"height":73,"strokewidth":0}}},{"kind":"state","name":"_default_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":256,"bottom":72,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":129}},"html5data":{"xPos":-1,"yPos":-1,"width":257,"height":73,"strokewidth":0}}},{"kind":"state","name":"_default_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-5,"top":-5,"right":261,"bottom":76,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":130}},"html5data":{"xPos":-5,"yPos":-5,"width":266,"height":81,"strokewidth":5}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-4,"top":-4,"right":259,"bottom":75,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":131}},"html5data":{"xPos":-4,"yPos":-4,"width":263,"height":79,"strokewidth":5}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-10,"top":-10,"right":265,"bottom":81,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":132}},"html5data":{"xPos":-10,"yPos":-10,"width":275,"height":91,"strokewidth":17}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-5,"top":-5,"right":261,"bottom":76,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":130}},"html5data":{"xPos":-5,"yPos":-5,"width":266,"height":81,"strokewidth":5}}},{"kind":"state","name":"_default_Hover_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-6,"top":-6,"right":261,"bottom":77,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":133}},"html5data":{"xPos":-6,"yPos":-6,"width":267,"height":83,"strokewidth":9}}},{"kind":"state","name":"_default_Hover_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-17,"top":-17,"right":272,"bottom":88,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":134}},"html5data":{"xPos":-17,"yPos":-17,"width":289,"height":105,"strokewidth":31}}},{"kind":"state","name":"_default_Hover_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-5,"top":-5,"right":261,"bottom":76,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":130}},"html5data":{"xPos":-5,"yPos":-5,"width":266,"height":81,"strokewidth":5}}}],"width":256,"height":71,"resume":true,"useHandCursor":true,"id":"5rIu28ZV6pa","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_visited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savevisited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetVisitedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"var","value":"#_visited"}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"boolean","value":false}}]},"ActGrpSetStatesFinal":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"#_hover","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.5c1Q0IKmKo8"}},{"kind":"media_play","objRef":{"type":"string","value":"_parent.5c1Q0IKmKo8"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"_parent.5c1Q0IKmKo8"}}],"elseActions":[{"kind":"media_pause","objRef":{"type":"string","value":"_parent.5c1Q0IKmKo8"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.5c1Q0IKmKo8"}}]}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetVisitedState","scopeRef":{"type":"string","value":"_this"}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"_parent.5opgL83Gq2y.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_parent.6q1klY10qVS"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6MS4ZWLqmdv.InvalidPromptSlide"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6my53Neax8p_CorrectReview","id":"01","linkId":"6my53Neax8p_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":682,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":122}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":121}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"6my53Neax8p_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6my53Neax8p_IncorrectReview","id":"01","linkId":"6my53Neax8p_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":691,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":124}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":123}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"6my53Neax8p_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"txt_6my53Neax8p_ReviewShape","id":"01","linkId":"txt_6my53Neax8p_ReviewShape","type":"vectortext","altText":"","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":665,"bottom":672,"pngfb":false,"pr":{"l":"Lib","i":137}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":4,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":576,"rotateYPos":282.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1259,"bottom":737,"altText":"","pngfb":false,"pr":{"l":"Lib","i":136}},"html5data":{"xPos":1,"yPos":1,"width":1257,"height":735,"strokewidth":1}},"width":1152,"height":565,"resume":false,"useHandCursor":true,"id":"6my53Neax8p_ReviewShape"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');