(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"/zwu":function(module,exports,e){var t=e("PI7E"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},"0y2b":function(module,exports,e){var t=e("W3Wi"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},"1Avn":function(module,e,t){"use strict";var a=t("pVnL"),n=t.n(a),r=t("sbe7"),o=t.n(r),s=t("VYij"),i=t.n(s),c=t("jrIE"),l=t("TOZ3"),u=t("CsdX"),m=t("buno"),d=t("sVQF"),p=t.n(d),h=function Breadcrumbs(e){var t=e.navItems,a=e.fontSize,r=void 0===a?12:a,s=e.ariaLabel;return t.length>0?o.a.createElement("div",{className:"rc-Breadcrumbs",role:"navigation","aria-label":s||"breadcrumb"},o.a.createElement(l.b,{justifyContent:"start",alignItems:"center"},i.a.flatten(t.map(function(e,a){return[o.a.createElement("div",{key:"bc-item-".concat(e.title),className:"breadcrumb-item",style:{fontSize:r}},e.location&&e.trackingName?o.a.createElement(m.a,n()({href:e.location,trackingName:e.trackingName,className:"breadcrumb-title"},a===t.length-1?{ariaCurrent:"page"}:{}),e.title):o.a.createElement("span",{className:"breadcrumb-title","aria-current":a===t.length-1?"page":void 0},e.title)),t.length-1!==a&&o.a.createElement("div",{key:"bc-arrow-".concat(e.title),className:"breadcrumb-arrow"},o.a.createElement(c.a,{size:r,color:u.b.secondaryText,suppressTitle:!0}))]}),!0))):null};e.a=h},"1Vm9":function(module,exports,e){var t=e("Zaav"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},"2eP/":function(module,e,t){"use strict";var a=t("VbXa"),n=t.n(a),r=t("17x9"),o=t.n(r),s=t("sbe7"),i=t.n(s),c=t("vpZN"),l=t("JSqB"),u=t("t2a/"),m=t("b+bd"),d=t("sQ/U"),p=t("ra1b"),h=t("Ncxg"),v=function(e){function ItemViewHonorsModalContainer(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={showHonorsModal:d.a.isAuthenticatedUser()&&!t.props.hasUserSkippedLesson&&!t.props.hasUserSkippedHonorsModal&&t.props.lesson.getTrackId()===h.b},t.onClick=function(){t.context.executeAction(l.c,{lessonId:t.props.lesson.getId(),skipped:!0}),t.setState({showHonorsModal:!1})},t.onClickLeave=function(){var e=t.props,a=e.courseRootPath,n=e.currentWeek;t.context.router.push(Object(c.f)(a,n))},t}var t;return n()(ItemViewHonorsModalContainer,e),ItemViewHonorsModalContainer.prototype.render=function render(){return this.state.showHonorsModal?i.a.createElement(u.a,{onClose:this.onClick,onContinue:this.onClick,onLeave:this.onClickLeave}):null},ItemViewHonorsModalContainer}(i.a.Component);v.propTypes={courseRootPath:o.a.string.isRequired,lesson:o.a.instanceOf(p.a).isRequired,hasUserSkippedHonorsModal:o.a.bool,hasUserSkippedLesson:o.a.bool},v.contextTypes={router:o.a.object.isRequired,executeAction:o.a.func.isRequired},e.a=Object(m.a)(v,["HonorsUserPreferencesStore","CourseStore","CourseScheduleStore"],function(e,t){var a=e.HonorsUserPreferencesStore,n=e.CourseStore,r=e.CourseScheduleStore,o=t.lesson,s=n.getCourseId();return{courseRootPath:n.getCourseRootPath(),currentWeek:r.getWeekForModuleId(o.getModule().getId()),hasUserSkippedHonorsModal:a.hasUserSkippedHonorsModalForCourseId(s),hasUserSkippedLesson:a.getLessonSkipped(o.getId())}});var g=v},"35Zk":function(module,exports,e){var t=e("jmEU"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},"3akt":function(module,exports,e){},"4Yew":function(module,e,t){"use strict";var a=t("VbXa"),n=t.n(a),r=t("17x9"),o=t.n(r),s=t("sbe7"),i=t.n(s),c=t("TOZ3"),l=t("Cm2a"),u=t("a4Tm"),m=t("yOiu"),d=t.n(m),p=function(e){function LockedByPreviousItemLockedCover(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).handleClick=function(){var e=t.props.computedItem.lockedByPreviousItem;t.context.router.push({pathname:e&&e.resourcePath,query:t.context.router.location.query})},t}var t;return n()(LockedByPreviousItemLockedCover,e),LockedByPreviousItemLockedCover.prototype.render=function render(){var e=this.props.computedItem;return i.a.createElement(c.b,{rootClassName:"rc-LockedByPreviousItemLockedCover"},i.a.createElement(l.a,null),i.a.createElement("div",null,i.a.createElement(u.a,{computedItem:e}),i.a.createElement("p",null,d()("Complete the previous item to unlock this item.")),i.a.createElement("ul",null,i.a.createElement("li",null,d()("If you have just completed the previous item, please refresh your browser to unlock this item.")),i.a.createElement("li",null,d()("If you have completed the previous item and a refresh still shows this page, please contact "),i.a.createElement("a",{href:"https://learner.coursera.help/hc"},d()("Coursera 24x7 support")))),i.a.createElement("button",{className:"primary",onClick:this.handleClick},d()("Go to Previous Item"))))},LockedByPreviousItemLockedCover}(i.a.Component);p.contextTypes={router:o.a.object.isRequired},e.a=p},"5iSx":function(module,e,t){"use strict";var a=t("VbXa"),n=t.n(a),r=t("sbe7"),o=t.n(r),s=t("w/1P"),i=t.n(s),c=t("cKna"),l=t("6uIz"),u=t("GnyC"),m=t("TOZ3"),d=t("KMW/"),p=t("QjkW"),h=t("Q8V+"),v=t("b+bd"),g=t("WrMM"),f=t.n(g),b="itemSecondaryNavCollapsed",I=function getInitialCollapsedState(){var e=p.a.get(b);return d.a.get("Flex","secondaryNavStartCollapsed")?void 0===e||e||Object(h.c)():e||Object(h.c)()},C=function(e){function ItemSecondaryNavigation(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={collapsed:I()},t.toggleCollapse=function(){t.setState(function(e){var t=!e.collapsed;return p.a.set(b,t),{collapsed:t}})},t}var t;return n()(ItemSecondaryNavigation,e),ItemSecondaryNavigation.prototype.render=function render(){var e=this.props,t=e.lessons,a=e.lesson,n=e.itemId,r=this.state.collapsed,s=i()("rc-ItemSecondaryNavigation","theme-white","c-item-navigation-container",{collapsed:r});return o.a.createElement(m.b,{rootClassName:s,justifyContent:"start",alignItems:"stretch",style:{flexGrow:0}},o.a.createElement(c.a,{lessons:t,currentLesson:a,currentItemId:n,collapsed:r}),o.a.createElement(l.a,{active:!r,onToggleClick:this.toggleCollapse}))},ItemSecondaryNavigation}(o.a.Component);e.a=Object(v.a)(C,["CourseStore","CourseScheduleStore"],function(e,t){var a=e.CourseStore,n=e.CourseScheduleStore;return{lessons:Object(u.f)(a,n,t.weekNumber)}})},"5wXG":function(module,e,t){"use strict";var a=t("sbe7"),n=t.n(a),r=t("FHuh"),o=function LessonItems(e){var t=e.items,a=e.currentItemId;return n.a.createElement("ul",{className:"rc-LessonItems nostyle"},t.map(function(e){var t=a===e.getId();return n.a.createElement("li",{key:e.getId()},n.a.createElement(r.b,{highlighted:t,itemMetadata:e}))}))};e.a=o},"6bw5":function(module,e,t){"use strict";var a=t("sbe7"),n=t.n(a),r=t("eKs0"),o=t("kvW3"),s=t("37kS"),i=t.n(s),c=t("35Zk"),l=t.n(c),u=function LatePenaltyNotification(e){var t=e.latePenalty;return n.a.createElement(r.a,{type:"info",message:n.a.createElement(o.a,{message:i()("This item has a late penalty. {penaltyLabel}. {actionLabel}"),penaltyLabel:t.learnerLabel,actionLabel:n.a.createElement("a",{href:"//learner.coursera.help",target:"_blank",rel:"noopener noreferrer"},i()("Learn More"))}),isDismissible:!1,htmlAttributes:{"data-classname":"late-penalty-notification"}})};e.a=u},"6uIz":function(module,e,t){"use strict";var a=t("VbXa"),n=t.n(a),r=t("sbe7"),o=t.n(r),s=t("QjkW"),i=t("PJ/k"),c=t.n(i),l=t("w/1P"),u=t.n(l),m=t("BxDD"),d=t("AWZ4"),p=t("TOZ3"),h=t("CsdX"),v=t("gn1H"),g=t("Ihj9"),f=t("gKW9"),b=t.n(f),I=t("HRF5"),C=t.n(I),E=Object(g.a)({type:"BUTTON"})(m.a),y=Object(g.a)({type:"BUTTON"})(d.b),k="itemNavTutorialSeen",N=function(e){function SecondaryNavTogglePanel(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={hideTutorial:s.a.get(k)},t.handleToggleClick=function(){var e;(0,t.props.onToggleClick)(),t.hideTutorial()},t.hideTutorial=function(){t.setState(function(){return s.a.set(k,!0),{hideTutorial:!0}})},t}var t;return n()(SecondaryNavTogglePanel,e),SecondaryNavTogglePanel.prototype.render=function render(){var e=this.props,t=e.active,a=e.toggleSvgElement,n=this.state.hideTutorial;return o.a.createElement(p.b,{rootClassName:"rc-SecondaryNavTogglePanel",justifyContent:"start",alignItems:"center",flexDirection:"column"},o.a.createElement(E,{trackingName:"toggle_secondary_nav",trackingData:{currentlyActive:t},rootClassName:u()("nav-tool-button",{active:t}),onClick:this.handleToggleClick,htmlAttributes:{"aria-label":b()("Toggle Navigation Panel"),"aria-expanded":t,"aria-describedby":"secondary-navTogglePanel-instructions"},size:"zero",type:"icon",svgElement:a||o.a.createElement(v.a,{color:h.b.black,hoverColor:h.b.black,size:20,suppressTitle:!0})}),!n&&o.a.createElement(i.Tooltip,{placement:"right",className:"sidebar-tutorial-tooltip"},o.a.createElement(p.b,{className:"tooltip-content",justifyContent:"start",alignItems:"stretch"},o.a.createElement("span",{id:"secondary-navTogglePanel-instructions",className:"tooltip-text"},b()("Click the sidebar icons to open lesson lists and notes.")),o.a.createElement("div",{className:"tooltip-button-container"},o.a.createElement(y,{trackingName:"close_tooltip_secondary_nav",trackingData:{currentlyActive:t},onClick:this.hideTutorial,rootClassName:"tooltip-button",type:"secondary",size:"sm",style:{textAlign:"right"}},b()("Okay, got it!"))))))},SecondaryNavTogglePanel}(o.a.Component);e.a=N},"7UEY":function(module,exports,e){},ABpP:function(module,exports,e){var t=e("uyFx"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},AKBM:function(module,exports,e){},B7Wo:function(module,e,t){"use strict";var a=t("VbXa"),n=t.n(a),r=t("sbe7"),o=t.n(r),s=t("VYij"),i=t.n(s),c=t("/fse"),l=t("b+bd"),u=function(e){function ItemHeader(){return e.apply(this,arguments)||this}var t;return n()(ItemHeader,e),ItemHeader.prototype.render=function render(){var e=this.props.course,t;return e&&e.get("brandingImage")&&(t={id:e.get("id"),name:e.get("name"),brandingImageUrl:e.get("brandingImage")}),o.a.createElement("div",{className:"rc-ItemHeader"},o.a.createElement(c.a,{hasCatalogButton:!0,hideEnterprise:!0,catalogSubBannerProps:{hidePromoBanner:!0},course:t}))},ItemHeader}(o.a.Component);e.a=i.a.compose(Object(l.a)(["CourseStore"],function(e,t){var a=e.CourseStore;return{course:a.getMetadata(),courseId:a.getCourseId()}}))(u)},C5mn:function(module,exports,e){},Cm2a:function(module,e,t){"use strict";var a=t("sbe7"),n=t.n(a),r=t("CsdX"),o=t("c8mT"),s=function LockIcon(){return n.a.createElement("div",{className:"rc-LockIcon"},n.a.createElement(o.a,{size:35,color:r.b.lightGrayText}))};e.a=s},EbL0:function(module,exports,e){var t=e("YjsZ"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},EgDW:function(module,e,t){"use strict";var a=t("VbXa"),n=t.n(a),r=t("sbe7"),o=t.n(r),s=t("MnCE"),i=t("w/1P"),c=t.n(i),l=t("P3O5"),u=t("2eP/"),m=t("YpyA"),d=t("5iSx"),p=t("6PQb"),h=t("TOZ3"),v=t("b+bd"),g=t("dT9E"),f=t("LX6k"),b=t.n(f),I=function(e){function ItemNavigation(){return e.apply(this,arguments)||this}var t;return n()(ItemNavigation,e),ItemNavigation.prototype.render=function render(){var e=this.props,t=e.courseId,a=e.courseSlug,n=e.currentLesson,r=e.currentItemId,s=e.weekNumber,i=e.showEnrollmentStateBanner,p=e.highlightSidebarExpanded,v=e.currentChoice,f=e.children;return o.a.createElement(h.b,{rootClassName:c()("rc-ItemNavigation",{showEnrollmentStateBanner:i,highlightSidebarExpanded:p}),justifyContent:"start",alignItems:"stretch",flexDirection:"column"},o.a.createElement(u.a,{lesson:n}),!g.a.get()&&o.a.createElement(m.a,{courseSlug:a,lesson:n,itemId:r,weekNumber:s}),o.a.createElement(h.b,{rootClassName:"item-tools-and-content-container",justifyContent:"start",alignItems:"stretch",flexDirection:"row"},!g.a.get()&&o.a.createElement(d.a,{lesson:n,itemId:r,weekNumber:s}),o.a.createElement("div",{"data-id":"item-scroll-container",className:"item-scroll-container"},!!v&&o.a.createElement(l.a,{choice:v}),f)))},ItemNavigation}(o.a.Component);e.a=Object(s.compose)(Object(p.a)(),Object(v.a)(["CourseStore","HighlightingUIPanelVisibilityPreferenceStore"],function(e,t){var a=e.CourseStore,n=e.HighlightingUIPanelVisibilityPreferenceStore,r=t.currentItemId,o=a.getMaterials(),s=o&&r&&o.getItemMetadata(r),i=s&&s.getChoice(),c=s.isLecture();return{currentChoice:i,isInChoice:!!i,courseId:a.getCourseId(),courseSlug:a.getCourseSlug(),highlightSidebarExpanded:c&&n.getUIPanelVisibilityPreference()}}))(I)},EoBV:function(module,e,t){"use strict";var a=t("VbXa"),n=t.n(a),r=t("sbe7"),o=t.n(r),s=t("MnCE"),i=t("+LJP"),c=t("8cuT"),l=t.n(c),u=function(e){function ItemNotFound(){return e.apply(this,arguments)||this}n()(ItemNotFound,e);var t=ItemNotFound.prototype;return t.componentDidMount=function componentDidMount(){var e=this.props,t=e.router,a=e.courseRootPath;t.push("".concat(a,"/home/welcome"))},t.render=function render(){return null},ItemNotFound}(o.a.Component);e.a=Object(s.compose)(Object(i.a)(function(e){return{router:e}}),l()(["CourseStore"],function(e){var t;return{courseRootPath:e.CourseStore.getCourseRootPath()}}))(u)},F1T5:function(module,exports,e){var t=e("FGpw"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},FGpw:function(module,exports,e){},HRF5:function(module,exports,e){var t=e("ypCg"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},KfjC:function(module,exports,e){var t=e("AKBM"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},LX6k:function(module,exports,e){var t=e("7UEY"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},MIKO:function(module,exports,e){},MoM9:function(module,e,t){"use strict";var a=t("VbXa"),n=t.n(a),r=t("17x9"),o=t.n(r),s=t("sbe7"),i=t.n(s),c=t("VYij"),l=t.n(c),u=t("FHuh"),m=t("pwEy"),d=t("+LJP"),p=t("NTOV"),h=t("37kS"),v=t.n(h),g=t("kvW3"),f=function(e){function LessonGroupItems(){return e.apply(this,arguments)||this}var t;return n()(LessonGroupItems,e),LessonGroupItems.prototype.render=function render(){var e=this.props,t=e.itemGroup,a=e.isOnDescriptionPage,n=e.currentItemId,r=t.getChoices().toArray();return i.a.createElement("div",{className:"rc-LessonGroupItems"},i.a.createElement(m.a,{isItemGroupDescriptionPage:a,itemGroup:t}),r.map(function(e,t){return i.a.createElement("div",{key:t},t>0&&i.a.createElement("hr",{className:"item-group-divider top-divider"}),i.a.createElement("h4",{className:"body-1-text choice-title"},i.a.createElement(g.b,{message:v()("{choiceIndex}. {choiceName}"),choiceIndex:t+1,choiceName:e.getName()})),i.a.createElement("ul",{className:"lesson-items nostyle"},e.getItemMetadatas().map(function(e){return i.a.createElement("li",{key:e.getId()},i.a.createElement(u.b,{itemMetadata:e,highlighted:n===e.getId()}))})))}))},LessonGroupItems}(i.a.Component);f.propTypes={itemGroup:o.a.instanceOf(p.a).isRequired,isOnDescriptionPage:o.a.bool.isRequired,currentItemId:o.a.string},e.a=Object(c.compose)(Object(d.a)(function(e,t){var a=t.itemGroup,n=e.params.item_group_id,r;return{isOnDescriptionPage:n&&e.isActive({name:"choices",params:e.params})&&a.get("id")===n}}))(f)},Nmry:function(module,e,t){"use strict";var a=t("sbe7"),n=t.n(a),r=t("8cuT"),o=t.n(r),s=t("yOiu"),i=t.n(s),c=t("kvW3"),l=function LockReason(e){var t=e.startDate,a=e.computedItem,r=a.itemLockedReasonCode,o=a.isLockedBeforeSessionStart,s;if("SESSION_ENDED"===r)s=n.a.createElement("p",null,i()("This session has ended. To resubmit, enroll in the next session."));else if("SESSION_ENDED_FOR_FLEXIBLE_SCHEDULE"===r)s=n.a.createElement("p",null,i()("All deadlines have passed. To unlock and submit additional assignments, reset your deadlines."));else if("ENROLLMENT_PREVIEW"===r)s=n.a.createElement("p",null,i()("You must be enrolled to access this item. Please enroll from the course page to continue."));else{if(!o)return null;s=n.a.createElement("p",null,n.a.createElement(c.b,{message:i()("This session has not yet started. You may access this item after the session starts on {startDate}."),startDate:t}))}return n.a.createElement("div",{className:"rc-LockReason"},s)};e.a=o()(["SessionStore"],function(e){var t;return{startDate:e.SessionStore.getStartDate()}})(l)},P3O5:function(module,e,t){"use strict";var a=t("MVZn"),n=t.n(a),r=t("VbXa"),o=t.n(r),s=t("w/1P"),i=t.n(s),c=t("17x9"),l=t.n(c),u=t("sbe7"),m=t.n(u),d=t("y1LI"),p=t("+5XM"),h=t("9A5E"),v=t("9Rop"),g=t("8cuT"),f=t.n(g),b=t("gKW9"),I=t.n(b),C=t("kvW3"),E=t("ABpP"),y=t.n(E),k=function(e){function ItemChoiceBanner(t,a){var n;return(n=e.call(this,t,a)||this).handleToggleExpanded=function(){n.setState({expanded:!n.state.expanded})},n.state={expanded:!0},n}var t;return o()(ItemChoiceBanner,e),ItemChoiceBanner.prototype.render=function render(){var e=this.props,t=e.choice,a=e.isItemGroupPassed,n=e.passedChoicesCount,r=i()("od-item-choice-header","card-rich-interaction","horizontal-box","align-items-vertical-center",{"item-choice-header-passed":a});return m.a.createElement("div",{className:"rc-ItemChoiceBanner"},m.a.createElement("div",{className:r},m.a.createElement(h.c,{className:"od-item-choice-header-main nostyle flex-1 horizontal-box align-items-vertical-center",href:t.getItemGroup().getLink(),trackingName:"item_choice_banner"},m.a.createElement(p.a,{isItemGroupPassed:a,passedChoicesCount:n,requiredPassedCount:t.getItemGroup().getRequiredPassedCount(),choicesCount:t.getItemGroup().getChoicesCount(),trackId:t.getLesson().getTrackId()})),m.a.createElement("button",{className:"od-item-choice-header-button nostyle",ariaLabel:this.state.expanded?I()("Collapse description"):I()("Expand description"),onClick:this.handleToggleExpanded},this.state.expanded?m.a.createElement(d.a,{name:"chevron-up"}):m.a.createElement(d.a,{name:"chevron-down"}))),this.state.expanded&&m.a.createElement("div",{className:"od-item-choice-description-container"},m.a.createElement("div",{className:"body-2-text od-item-choice-description-title"},m.a.createElement(C.b,{message:I()("{choiceIndex}. {choiceName}"),choiceIndex:t.getIndexInGroup()+1,choiceName:t.getName()})),m.a.createElement("div",{className:"od-item-choice-description"},t.getDescription())))},ItemChoiceBanner}(m.a.Component);k.propTypes={choice:l.a.instanceOf(v.a).isRequired,isItemGroupPassed:l.a.bool.isRequired,passedChoicesCount:l.a.number.isRequired},e.a=f()(k,["CourseViewGradeStore"],function(e,t){var a=e.CourseViewGradeStore,r=t.choice,o=r&&a.isItemGroupPassed(r.getItemGroup().getId()),s=r&&a.getItemGroupOverallPassedCount(r.getItemGroup().getId());return n()({isItemGroupPassed:o,passedChoicesCount:s},t)});var N=k},PI7E:function(module,exports,e){},R3hl:function(module,exports,e){var t=e("gvAA"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},UNE7:function(module,exports,e){var t=e("iarc"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},V7OX:function(module,e,t){"use strict";t.r(e);var a=t("VbXa"),n=t.n(a),r=t("sbe7"),o=t.n(r),s=t("17x9"),i=t.n(s),c=t("w/1P"),l=t.n(c),u=t("MnCE"),m=t("q3BH"),d=t("FO9Q"),p=t("B7Wo"),h=t("EgDW"),v=t("EoBV"),g=t("HDv9"),f=t("gPFF"),b=t("6bw5"),I=t("DxlN"),C=t("mAYf"),E=t("hbUA"),y=t("dT9E"),k=t("+LJP"),N=t("8cuT"),S=t.n(N),P=t("tODj"),x=t("rcgU"),L=t("b7zP"),T=t("oOkp"),M=t("xmcF"),w=t("Masr"),O=t("UNE7"),j=t.n(O),A=function(e){function ItemPage(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).isOnMobile=function(){var e,a,n=(0,t.context.getStore)("ApplicationStore").getUserAgent(),r=n&&n.isMobileBrowser;return y.a.get()||r},t}n()(ItemPage,e);var t=ItemPage.prototype;return t.componentWillReceiveProps=function componentWillReceiveProps(e){var t=e.refetchLearnerGoals;t&&t()},t.render=function render(){var e=this.props,t=e.computedItem,a=e.computedItem,n=a.courseId,r=a.id,s=a.name,i=a.gradingLatePenalty,c=a.weekNumber,u=e.children,m=e.itemMetadata,v=Object(E.o)(t)||Object(E.n)(t)||Object(E.k)(t),y=Object(E.p)(t);return o.a.createElement(I.a,{name:C.b,itemId:r,courseId:n},o.a.createElement("div",{className:"rc-ItemPage"},o.a.createElement(d.a,{title:s,description:m.get("lesson.module.description")}),o.a.createElement(p.a,null),o.a.createElement(h.a,{currentItemId:r,currentLesson:m.get("lesson"),weekNumber:c},!!i&&o.a.createElement(b.a,{latePenalty:new w.a(i)}),o.a.createElement("main",{className:l()("item-page-content",{mobile:this.isOnMobile()}),style:{height:"100%"},id:"main"},(!v||y)&&o.a.cloneElement(u,{computedItem:t,itemMetadata:m,key:r}),v&&!y&&o.a.createElement(f.a,{computedItem:t}))),Object(E.i)(t)&&o.a.createElement(g.a,null)))},ItemPage}(o.a.Component);A.contextTypes={getStore:i.a.func},e.default=Object(u.compose)(Object(k.a)(function(e){var t;return{itemId:e.params.item_id}}),S()(["CourseStore","SessionStore"],function(e,t){var a=e.CourseStore,n=e.SessionStore,r=t.itemId,o=a.getCourseId(),s=a.getCourseSlug(),i,c,l;return{courseId:o,courseName:a.getMetadata().get("name"),courseSlug:s,courseBranchId:n.getBranchId()||o,itemMetadata:a.getMaterials().getItemMetadata(r)}}),Object(u.branch)(function(e){var t;return!e.itemMetadata},Object(u.renderComponent)(v.a)),P.b,m.a.createTrackedContainer(function(e){var t,a;return{namespace:{page:"item_layout"},course_id:e.courseId,item_id:e.itemId}}),Object(M.a)(function(e){var t=e.courseBranchId,a=e.computedItem,n=a.id,r=a.contentSummary.typeName;if(["quiz","exam"].includes(r))return null;return a.isFailed&&a.isSubmitted?new L.a({courseBranchId:t,itemId:a.id}):a.isPassed&&a.isSubmitted?new T.a({courseBranchId:t,itemId:a.id}):new x.a({courseBranchId:t,itemId:a.id})},function(e){var t;return{course_id:e.courseId}}))(A)},W3Wi:function(module,exports,e){},WrMM:function(module,exports,e){var t=e("3akt"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},YjsZ:function(module,exports,e){},YpyA:function(module,e,t){"use strict";var a=t("sbe7"),n=t.n(a),r=t("TOZ3"),o=t("xS6p"),s=t("hT4b"),i=t("gKW9"),c=t.n(i),l=t("/zwu"),u=t.n(l),m=function ItemPrimaryNavigation(e){var t=e.courseSlug,a=e.weekNumber,i=e.itemId,l=e.lesson,u=c()("Primary breadcrumb");return n.a.createElement("div",{className:"rc-ItemPrimaryNavigation"},n.a.createElement(r.b,{justifyContent:"between",alignItems:"center"},n.a.createElement(o.a,{itemId:i,courseSlug:t,weekNumber:a,ariaLabel:u}),n.a.createElement(s.a,{itemId:i,lesson:l})))};e.a=m},Zaav:function(module,exports,e){},a4Tm:function(module,e,t){"use strict";var a=t("VbXa"),n=t.n(a),r=t("sbe7"),o=t.n(r),s=t("hbUA"),i=function(e){function LockMessage(){return e.apply(this,arguments)||this}var t;return n()(LockMessage,e),LockMessage.prototype.render=function render(){var e=this.props.computedItem;if(!e.itemLockedStatus)return null;return o.a.createElement("div",{className:"rc-LockMessage","aria-live":"polite"},o.a.createElement("h3",null,Object(s.d)(e.itemLockedStatus,e.itemLockedReasonCode,e.itemLockSummary)))},LockMessage}(o.a.Component);e.a=i},b7zP:function(module,e,t){"use strict";var a=t("VbXa"),n=t.n(a),r=t("SDZF"),o=t("QjDL"),s=function(e){function AliceItemFailEvent(t){var a,n=t.courseBranchId,r=t.itemId;return(a=e.call(this,{type:o.c,courseBranchId:n})||this).itemId=r,a.id="".concat(o.c,"~").concat(n,"~").concat(r),a}return n()(AliceItemFailEvent,e),AliceItemFailEvent}(r.a);e.a=s},cKna:function(module,e,t){"use strict";var a=t("sbe7"),n=t.n(a),r=t("xQ6q"),o=t("vB4Y"),s=t.n(o),i=function CollapsibleLessonList(e){var t=e.lessons,a=e.currentLesson,o=e.currentItemId,s=e.collapsed;return n.a.createElement("ul",{className:"rc-CollapsibleLessonList nostyle","aria-hidden":s},t.map(function(e){return n.a.createElement("li",{key:e.get("id")},n.a.createElement(r.a,{lesson:e,currentItemId:o,isInitiallyCollapsed:e.get("id")!==a.get("id")}))}))};e.a=i},f452:function(module,e,t){"use strict";var a=t("sbe7"),n=t.n(a),r=t("TOZ3"),o=t("a4Tm"),s=t("Nmry"),i=t("Cm2a"),c=t("vpZN"),l=t("8cuT"),u=t.n(l),m=t("yOiu"),d=t.n(m),p=function DefaultItemLockedCover(e){var t=e.computedItem,a=e.courseRootPath;return n.a.createElement(r.b,{rootClassName:"rc-DefaultItemLockedCover",alignItems:"start"},n.a.createElement(i.a,null),n.a.createElement("div",null,n.a.createElement(o.a,{computedItem:t}),n.a.createElement(s.a,{computedItem:t}),n.a.createElement("a",{className:"course-link link-button primary",href:Object(c.a)(a),"data-js":"open-course-link"},d()("View course page"))))};e.a=u()(["CourseStore"],function(e){var t;return{courseRootPath:e.CourseStore.getCourseRootPath()}})(p)},fwAV:function(module,e,t){"use strict";var a=t("sbe7"),n=t.n(a),r=t("TOZ3"),o=t("Cm2a"),s=t("Nmry"),i=t("a4Tm"),c=t("rQpo"),l=t("8cuT"),u=t.n(l),m=function PremiumItemLockedCover(e){var t=e.courseId,a=e.computedItem;return n.a.createElement(r.b,{rootClassName:"rc-PremiumItemLockedCover"},n.a.createElement(o.a,null),n.a.createElement("div",null,n.a.createElement(i.a,{computedItem:a}),n.a.createElement(s.a,{computedItem:a}),n.a.createElement(c.a,{courseId:t})))};e.a=u()(["CourseStore"],function(e){var t;return{courseId:e.CourseStore.getCourseId()}})(m)},gPFF:function(module,e,t){"use strict";var a=t("sbe7"),n=t.n(a),r=t("sBWo"),o=t("fwAV"),s=t("f452"),i=t("4Yew"),c=t("F1T5"),l=t.n(c),u=function ItemLockedCover(e){var t=e.computedItem,a=s.a;return"PREMIUM"!==t.itemLockedReasonCode&&"PREMIUM_ITEM"!==t.itemLockedReasonCode||(a=o.a),t.isLockedByPreviousItem&&(a=i.a),n.a.createElement("div",{className:"rc-ItemLockedCover",role:"region"},n.a.createElement(a,{computedItem:t}))};e.a=Object(r.a)(u)},gvAA:function(module,exports,e){},hT4b:function(module,e,t){"use strict";var a=t("sbe7"),n=t.n(a),r=t("MnCE"),o=t("wdgj"),s=t("8cuT"),i=t.n(s),c=t("gKW9"),l=t.n(c),u=t("R3hl"),m=t.n(u),d=function PreviousAndNextItem(e){var t=e.itemId,a=e.lesson,r=e.courseMaterial,s=a.get("itemGroups").at(0),i=t&&r.getItemMetadata(t),c=r.getNeighboringNavigationItems(i||s),u=c.previous,m=c.next;return n.a.createElement("div",{className:"rc-PreviousAndNextItem horizontal-box"},n.a.createElement(o.a,{itemLink:u&&u.getLink(),text:l()("Prev"),label:l()("Previous Item")}),n.a.createElement("div",{className:"divider"}),n.a.createElement(o.a,{itemLink:m&&m.getLink(),text:l()("Next"),label:l()("Next Item")}))};e.a=Object(r.compose)(i()(["CourseStore"],function(e,t){var a;return{courseMaterial:e.CourseStore.getMaterials()}}))(d)},iarc:function(module,exports,e){},jmEU:function(module,exports,e){},o7Jx:function(module,e,t){"use strict";var a=t("VbXa"),n=t.n(a),r=t("sbe7"),o=t.n(r),s=t("eJMc"),i=t.n(s),c=t("8cuT"),l=t.n(c),u=t("vpZN"),m=t("gKW9"),d=t.n(m),p=function(e){function CourseHomeLink(){return e.apply(this,arguments)||this}var t;return n()(CourseHomeLink,e),CourseHomeLink.prototype.render=function render(){var e=this.props.courseRootPath;return o.a.createElement(i.a,{className:"nav-link dim body-1-text",to:Object(u.d)(e)},d()("Home"))},CourseHomeLink}(o.a.Component);e.a=l()(["CourseStore"],function(e,t){var a;return{courseRootPath:e.CourseStore.getCourseRootPath()}})(p)},oOkp:function(module,e,t){"use strict";var a=t("VbXa"),n=t.n(a),r=t("SDZF"),o=t("QjDL"),s=function(e){function AliceItemSuccessEvent(t){var a,n=t.courseBranchId,r=t.itemId;return(a=e.call(this,{type:o.d,courseBranchId:n})||this).itemId=r,a.id="".concat(o.d,"~").concat(n,"~").concat(r),a}return n()(AliceItemSuccessEvent,e),AliceItemSuccessEvent}(r.a);e.a=s},pwEy:function(module,e,t){"use strict";var a=t("VbXa"),n=t.n(a),r=t("17x9"),o=t.n(r),s=t("sbe7"),i=t.n(s),c=t("VYij"),l=t.n(c),u=t("w/1P"),m=t.n(u),d=t("9A5E"),p=t("VXRf"),h=t("b+bd"),v=t("gKW9"),g=t.n(v),f=t("kvW3"),b=t("1Vm9"),I=t.n(b),C=function(e){function WeekDrawerSubheaderItemGroup(){return e.apply(this,arguments)||this}n()(WeekDrawerSubheaderItemGroup,e);var t=WeekDrawerSubheaderItemGroup.prototype;return t.renderMessage=function renderMessage(){var e=this.props,t=e.passedChoicesCount,a=e.isItemGroupPassed,n=e.requiredPassedCount,r=e.choicesCount;return a?i.a.createElement("div",{className:"body-2-text"},g()("Completed")):0===t?i.a.createElement("strong",null,i.a.createElement(f.a,{message:g()("Complete {requiredPassedCount} out of {choicesCount}"),requiredPassedCount:n,choicesCount:r})):i.a.createElement("strong",null,i.a.createElement(f.a,{message:g()("Complete {morePassCount} more"),morePassCount:n-t}))},t.render=function render(){var e=this.props,t=e.itemGroupLink,a=e.isItemGroupPassed,n=e.isItemGroupDescriptionPage,r=m()("rc-WeekDrawerSubheaderItemGroup","card-rich-interaction","nostyle",a&&"item-group-header-passed",n&&"item-group-header-active");return i.a.createElement(d.c,{className:r,trackingName:"week_drawer_item_group_subheader",href:t},this.renderMessage())},WeekDrawerSubheaderItemGroup}(i.a.Component);C.propTypes={itemGroupLink:o.a.string.isRequired,passedChoicesCount:o.a.number.isRequired,isItemGroupPassed:o.a.bool.isRequired,requiredPassedCount:o.a.number.isRequired,choicesCount:o.a.number.isRequired,isItemGroupDescriptionPage:o.a.bool.isRequired},e.a=Object(c.compose)(Object(p.a)(function(e){var t=e.itemGroup;return{itemGroupId:t.getId(),itemGroupLink:t.getLink(),requiredPassedCount:t.getRequiredPassedCount(),choicesCount:t.getChoicesCount()}}),Object(h.a)(["CourseViewGradeStore"],function(e,t){var a=e.CourseViewGradeStore,n=t.itemGroupId;return{passedChoicesCount:a.getItemGroupOverallPassedCount(n),isItemGroupPassed:a.isItemGroupPassed(n)}}))(C);var E=C},rcgU:function(module,e,t){"use strict";var a=t("VbXa"),n=t.n(a),r=t("SDZF"),o=t("QjDL"),s=function(e){function AliceItemViewEvent(t){var a,n=t.courseBranchId,r=t.itemId;return(a=e.call(this,{type:o.e,courseBranchId:n})||this).itemId=r,a.id="".concat(o.e,"~").concat(n,"~").concat(r),a}return n()(AliceItemViewEvent,e),AliceItemViewEvent}(r.a);e.a=s},sVQF:function(module,exports,e){var t=e("MIKO"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},"t2a/":function(module,e,t){"use strict";var a=t("VbXa"),n=t.n(a),r=t("17x9"),o=t.n(r),s=t("sbe7"),i=t.n(s),c=t("JSqB"),l=t("zhNr"),u=t("b+bd"),m=t("5yEA"),d=t("37kS"),p=t.n(d),h=t("wYjm"),v=t.n(h),g=function(e){function HonorsContentModal(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={disableModalChecked:!1},t.handleContinue=function(){var e=t.props,a=e.authenticated,n=e.onContinue;if(t.state.disableModalChecked){var r=t.props.honorsUserPreferencesWithThisCourseSkipped;t.context.executeAction(c.b,{authenticated:a,updatedHonorsUserPreferences:r})}n()},t.handleCloseModal=function(){t.props.onClose()},t.handleLeave=function(){t.props.onLeave()},t.handleCheckboxChange=function(){t.setState({disableModalChecked:!t.state.disableModalChecked})},t}var t;return n()(HonorsContentModal,e),HonorsContentModal.prototype.render=function render(){var e=i.a.createElement("div",{className:"rc-HonorsContentModal body-1-text vertical-box"},i.a.createElement("p",null,p()("You're accessing Honors content. Here's what you need to know:")),i.a.createElement("ol",null,i.a.createElement("li",null,p()("\n              You can earn Honors Recognition by completing all required assignments in the course and all Honors\n              assignments.\n            ")),i.a.createElement("li",null,p()("Honors assignments are not required to pass the course.")),i.a.createElement("li",null,p()("Your performance on Honors assignments will not affect your course grade."))),i.a.createElement("div",{className:"horizontal-box honors-buttons"},i.a.createElement("div",{className:"flex-1 align-self-center horizontal-box align-items-vertical-center"},i.a.createElement(m.a,{checked:this.state.disableModalChecked,id:"disable-modal",onChange:this.handleCheckboxChange}),i.a.createElement("span",{className:"caption-text color-secondary-text checkbox-label"},p()("I understand. Please don't show again."))),!!this.props.onLeave&&i.a.createElement("button",{className:"secondary cozy",onClick:this.handleLeave},p()("Leave Honors Content")),i.a.createElement("button",{className:"primary cozy",onClick:this.handleContinue},p()("Continue"))));return i.a.createElement(l.a,{onClose:this.handleCloseModal,title:p()("Honors Content"),content:e})},HonorsContentModal}(i.a.Component);g.propTypes={onClose:o.a.func.isRequired,onContinue:o.a.func.isRequired,authenticated:o.a.bool,honorsUserPreferencesWithThisCourseSkipped:o.a.object,onLeave:o.a.func},g.contextTypes={executeAction:o.a.func.isRequired},e.a=Object(u.a)(g,["ApplicationStore","CourseStore","HonorsUserPreferencesStore"],function(e,t){var a=e.ApplicationStore,n=e.CourseStore,r=e.HonorsUserPreferencesStore,o=n.getCourseId();return{honorsUserPreferencesWithThisCourseSkipped:r.getUserPreferencesWithSkippedCourseId(o),authenticated:a.isAuthenticatedUser()}})},uyFx:function(module,exports,e){},vB4Y:function(module,exports,e){var t=e("vBiI"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},vBiI:function(module,exports,e){},wYjm:function(module,exports,e){var t=e("C5mn"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},wdgj:function(module,e,t){"use strict";var a=t("sbe7"),n=t.n(a),r=t("eJMc"),o=t.n(r),s=t("o7Jx"),i=function NavLink(e){var t=e.itemLink,a=e.text,r=e.label;if(!t)return n.a.createElement(s.a,null);return n.a.createElement(o.a,{className:"nav-link dim body-1-text",to:t,"aria-label":r},a)};e.a=i},xQ6q:function(module,e,t){"use strict";var a=t("VbXa"),n=t.n(a),r=t("sbe7"),o=t.n(r),s=t("w/1P"),i=t.n(s),c=t("5wXG"),l=t("MoM9"),u=t("0y2b"),m=t.n(u),d=function(e){function CollapsibleLesson(t){var a;return(a=e.call(this,t)||this).toggleItems=function(){var e=a.state.isCollapsed;a.setState({isCollapsed:!e})},a.state={isCollapsed:t.isInitiallyCollapsed},a}var t;return n()(CollapsibleLesson,e),CollapsibleLesson.prototype.render=function render(){var e=this.props,t=e.lesson,a=e.currentItemId,n=this.state.isCollapsed,r=t.getItemGroups().at(0),s=void 0!==t.getItemMetadata(a),u=t.get("name");return o.a.createElement("div",{className:"rc-CollapsibleLesson"},o.a.createElement("button",{type:"button",className:"nostyle link-button",onClick:this.toggleItems,"aria-expanded":!n},o.a.createElement("h2",{className:i()("lesson-name","headline-1-text","color-primary-text",{highlighted:s})},u)),!n&&o.a.createElement("div",{className:"item-list"},r?o.a.createElement(l.a,{itemGroup:r,currentItemId:a}):o.a.createElement(c.a,{items:t.getItemMetadatas().toArray(),currentItemId:a})))},CollapsibleLesson}(o.a.Component);d.defaultProps={isInitiallyCollapsed:!0},e.a=d},xS6p:function(module,e,t){"use strict";var a=t("sbe7"),n=t.n(a),r=t("unn+"),o=t("8cuT"),s=t.n(o),i=t("tODj"),c=t("gABk"),l=t("MnCE"),u=t("vpZN"),m=t("1Avn"),d=t("gKW9"),p=t.n(d),h=t("KfjC"),v=t.n(h),g=function ItemNavBreadcrumbs(e){var t=e.computedItem,a=e.computedCourseProgress,o=e.ariaLabel;if(!t||!a)return r.default.error("<ItemNavBreadcrumbs> Item or course not defined."),null;var s=t.weekNumber,i=t.name,c=a.courseName,l=a.courseSlug;if(!(s&&i&&c&&l))return r.default.error("<ItemNavBreadcrumbs> Critical fields (item name, week, coure) not defined."),null;var d=Object(u.c)(l),h=[{title:c,trackingName:"item_nav_course_name",location:Object(u.d)(d)},{title:p()("Week #{week}",{week:s}),trackingName:"item_nav_week_number",location:Object(u.f)(d,s)},{title:i}];return n.a.createElement("div",{className:"rc-ItemNavBreadcrumbs"},n.a.createElement(m.a,{navItems:h,ariaLabel:o}))};e.a=Object(l.compose)(s()(["CourseStore"],function(e,t){var a=e.CourseStore,n=t.itemId;return{itemMetadata:a.getMaterials().getItemMetadata(n)}}),i.b,c.a)(g)},ypCg:function(module,exports,e){},zhNr:function(module,e,t){"use strict";t.d(e,"a",function(){return f});var a=t("VbXa"),n=t.n(a),r=t("17x9"),o=t.n(r),s=t("sbe7"),i=t.n(s),c=t("IAOZ"),l=t("Akn8"),u=t("GXs9"),m=t("+2ZD"),d=t("a2Sk"),p=t("EbL0"),h=t.n(p),v=c.a.rootPath,g=l.a.join(v,"bundles/ondemand/assets/images/modal-cert.png"),f=function(e){function HonorsModal(){return e.apply(this,arguments)||this}var t;return n()(HonorsModal,e),HonorsModal.prototype.render=function render(){var e=this.props,t=e.title,a=e.content,n=e.onClose;return i.a.createElement(m.a,{handleClose:n,modalName:"Honors Modal",className:"rc-HonorsModal",trackingName:"honors_modal"},i.a.createElement("div",{className:"vertical-box honors-modal-content"},i.a.createElement("div",{className:"horizontal-box align-items-absolute-center modal-title"},i.a.createElement("h3",{className:"headline-4-text"},t)),i.a.createElement("div",{className:"honors-divider align-self-center"}),i.a.createElement("div",{className:"align-self-center flex-1 honors-image"},i.a.createElement(u.a,{src:g,alt:"Honors certificate",width:300})),a))},HonorsModal}(i.a.Component);f.propTypes={onClose:o.a.func.isRequired,title:o.a.string.isRequired,content:o.a.node.isRequired}}}]);
//# sourceMappingURL=22.1236a2d673bbe2fdad28.js.map