
import { PUSH_WEEKS_ARRAY, ACTUAL_WEEK, ACTUAL_TARGET, PUT_INTO_DAY, ACTUAL_DAY, DELETE_CLICKED_TARGET, 
    SHOW_ALL_TARGETS, TRACK_WEEK, NUMBER_OF_TRACKING_DAY, NUMBER_OF_TRACKING_WEEK, DONE_TARGET,
     AREA_FOR_NOTE, SHOW_ALL_NOTES, CLICKED_LI, AUTH_FORM, USER_ID, SHOW_ALL_WEEKS,
     BUTTON_FOR_TRACK, TRK_WEEK, CLEAR_BY_DAYS_CONTEXT, TRACK_WEEK_FROM_TABLE, BUTTON_SHOW_WEEKS, PUSH_NEW_TARGET, CLOSE_NEW_TARGET_FORM, ADD_MORE_TARGET_READY, REMOVE_NOTE, MAKE_TEST_MODE } from './types'

const handlers={
    [PUSH_WEEKS_ARRAY]: (state, {payload})=>({
        ...state,
            weeksArray: payload.forPush
    }),
    [ACTUAL_WEEK]: (state,{payload})=>({
        ...state,
        actualWeekName: payload.actW,
        visibleDiv: true
    }),
    [ACTUAL_TARGET]: (state,{payload})=>({
        ...state,
        clickedTarget: payload.clkTarg
    }),
    [ACTUAL_DAY]:(state,{payload})=>({
        ...state,
        actualDayName: payload.clDayId
    }),
    [PUT_INTO_DAY]:(state, {payload})=>({
        ...state,
            weeksArray: [...state.weeksArray], ...state.weeksArray.forEach(element=>{
                if(element.id===state.actualWeekName) {
                    return {...element,
                    [element.weekDay]: element.weekDay.forEach(el=>{
                        
                        if(element.weekDay.indexOf(el)==payload.clDayId){
                            console.log("333")
                            console.log(el)

                            return {...el.targets}, el.targets.push(payload.objForPut)
                
                        }
                        return {...el}
                    })

                }}
                return {...element}
            })
            
       
       
        /* ...state,
            weeksArray: [...state.weeksArray], ...state.weeksArray.forEach(el=>{
                //надо получит ьнужную неделю
                    
                    if(state.weeksArray.indexOf(el) ==state.actualWeekName-1){//попали в неделю
                        return{...el,
                            [el.weekDay]: el.weekDay.forEach(e=>{
                                if(el.weekDay.indexOf(e) == payload.indexD){
                                   return {...e.targets}, e.targets.push(payload.objForPut)
                                }return {...e}
                            })
                        }                       
                    }
                    return{...el}
        })  */
    }),
    [DELETE_CLICKED_TARGET]:(state)=>({
         ...state,
            weeksArray:state.weeksArray.map(el=> {
                const id= el.id
                if(id == state.actualWeekName){
                     return {...el,
                        weekTarget: [...el.weekTarget.filter(e=> e.name!==state.clickedTarget)]
                        //el.weekTarget.filter(e=> e!==state.clickedTarget)
                    }   
                }
                return {...el}
            }),

            actualWeekName: state.weeksArray[state.actualWeekName-1].weeksTarget=={}?'': state.actualWeekName,
            actualDayName:'',
            clickedTarget:''
    }),
    [SHOW_ALL_TARGETS]:(state)=>({...state,showAllTargetsW:true}),
    [BUTTON_SHOW_WEEKS]:(state)=>({...state,trackWeek:false}),
    [TRACK_WEEK]:(state,{payload})=>({
        ...state,
       weeksArray:payload.userWeekArray,
        trackWeek:true}),
    [TRK_WEEK]:(state)=>({...state,trackWeek:true}),
    [TRACK_WEEK_FROM_TABLE]:(state,{payload})=>({
        ...state,
        trackWeek:true,
        numberOfTrackingWeek:payload.weekNumber,
        nameEngTrackingDay:payload.dayOfWeek
    }),
    [NUMBER_OF_TRACKING_DAY]:(state,{payload})=>({
        ...state, 
        numberOfTrackingDay:payload.numberStr,
        nameEngTrackingDay: payload.fullEng
    }) ,
    [NUMBER_OF_TRACKING_WEEK]:(state,{payload})=>({...state, 
        numberOfTrackingWeek: payload.numbWeek,
        numberOfTrackingDay:''
    }),
    [DONE_TARGET]: (state,{payload})=>({
        ...state,
        weeksArray: state.weeksArray.map(element=>{//неделя
            if(element.id==payload.weeksTargetDone+1){
                
                return {...element,//тогда верни элемент у него
                    weekDay: element.weekDay.map(el=>{
                        if(el.id==payload.dayFullEng){
                             return{...el,
                                targets:[...el.targets.map(t=>{
                                        if(t.name==payload.doneLiText){
                                            return {...t, 
                                                done:true} 
                                        }return {...t}
                                    })
                                ]
                            } 
                        }
                        return {...el}
                    })
                } 
            } return {...element}
        }
                 
            )
    }),
    [AREA_FOR_NOTE]: (state,{payload})=>({
        ...state,
        divNotes:!state.divNotes,
        //targetNote: payload.targN
    }),

    [CLICKED_LI]: (state,{payload})=>({...state, targetNote: payload.clkLi}),
    [SHOW_ALL_NOTES]: (state, {payload})=>({ 
        ...state,
            weeksArray:state.weeksArray.map(element=>{
               if(element.id== state.numberOfTrackingWeek+1){
                    return {...element,
                        weekDay:element.weekDay.map(e=>{
                       if(e.id== state.nameEngTrackingDay){
                           console.log('E', e)
                           console.log(e.notes)
                           return{
                                ...e,
                                notes:e.notes!==undefined
                                ?
                                    [...e.notes, {
                                    'parent': state.targetNote,
                                    'day': state.nameEngTrackingDay,
                                    'text': payload.noteText
                                }]
                                :  [{
                                    'parent': state.targetNote,
                                    'day': state.nameEngTrackingDay,
                                    'text': payload.noteText
                                }]
                            }
                        }return {...e}
                    })
                }
            }
                return {...element}
            }),
        allNotes:true//надо заметку добавить в нотс дня нужной недели с заголовком нужной задачи
    }),
    [AUTH_FORM]:(state)=>({...state, authForm:true}),
    [USER_ID]:(state,{payload})=>({...state, userId:payload.id}),
    [SHOW_ALL_WEEKS]:(state,{payload})=>({...state, weeksArray:payload.userWeekArray,showAllTargetsW:true }),
    [BUTTON_FOR_TRACK]:(state)=>({...state, buttonForTrack:true}),
    [CLEAR_BY_DAYS_CONTEXT]:(state)=>({
        ...state,
        weeksArray:[],
        actualWeekName:'',
        actualDayName:'',
        clickedTarget:'',
        visibleDiv: false,
        showAllTargetsW: false,
        trackWeek:false,
        numberOfTrackingWeek:'0',
        numberOfTrackingDay:'',
        nameEngTrackingDay:'',
        divNotes:false, 
        allNotes:true,
        targetNote:'',
        authForm:false,
        userId:'',
        buttonForTrack:false}),
    [PUSH_NEW_TARGET]:(state)=>({...state, addNewTarget:true}),
    [CLOSE_NEW_TARGET_FORM]:(state)=>({...state, addNewTarget:false}),
    [ADD_MORE_TARGET_READY]:(state,{payload})=>({...state,
            weeksArray: state.weeksArray.map(element=>{
                const w=payload.week-1
                if(element.id==payload.week){
                    return {
                        ...element,
                        weekDay:
                         //console.log(state.weeksArray[w])
                        state.weeksArray[w].weekDay.map(el=>{
                        if(el.id==payload.day){
                            if(el.targets!==undefined){
                                return {
                                    ...el,
                                    targets: [...el.targets,payload.value]
                                }
                            } 
                            return {
                                    ...el,
                                    targets: [payload.value]
                                }
                            
                            console.log(payload.value)
                            console.log(el.targets)
                           
                            
                        }
                        return el
                    })
                    }
                   
                }
                return element
            })
    }),
    [REMOVE_NOTE]:(state, {payload})=>({
        ...state,
        weeksArray: state.weeksArray.map(element=>{
            console.log(element.id)
            console.log()
            if (element.id== state.numberOfTrackingWeek+1){
                console.log('\------------------')
               return {...element,
                    weekDay: element.weekDay.map(el=>{
                        console.log(el)
                        if(el.id==state.nameEngTrackingDay){
                            console.log('\###############')
                            return{
                                ...el,
                                notes: el.notes.filter(el=>el.text!== payload.txt)
                            }
                        }
                        return el
                    })
                }
            }
            return element
        })
    }),
    [MAKE_TEST_MODE]:(state)=>({
        ...state,
        weeksArray:[
            {id:1,
            weekTarget:[],
            weekDay:[ 
                     { id:'Monday',
                         targets:[{
                             adds: "", 
                             done: false, 
                             important: false, 
                             name: "прочитать главу 1"},
                             {
                             adds: "", 
                             done: false, 
                             important: false, 
                             name: "пробежать 2 км"},
                             {
                            adds: "", 
                            done: false, 
                            important: false, 
                            name: "приготовить суп"},
                            {
                            adds: "", 
                            done: false, 
                            important: false, 
                            name: "написать текст"},
                            ],
                        notes:[
                            {day: "Monday", parent: "", text: "позвонить маме"},
                            {day: "Monday", parent: "", text: "купить хлеб"}
                        ]
                    },
                        {id:'Tuesday',
                        targets:[],
                       notes:[]},
                        {id:'Wednesday',
                        targets:[{
                            adds: "", 
                            done: false, 
                            important: false, 
                            name: "прочитать главу 1"},
                            {
                            adds: "", 
                            done: false, 
                            important: false, 
                            name: "пешая прогулка 3 часа"},
                            {
                           adds: "", 
                           done: false, 
                           important: false, 
                           name: "прочитать 2 главу книги"},
                           {
                           adds: "", 
                           done: false, 
                           important: false, 
                           name: "прослушать песню на английском"},
                           ],
                       notes:[
                           {day: "Monday", parent: "", text: "пройти тест"},
                           {day: "Monday", parent: "", text: "купить продукты"}
                       ]},
                        {id:'Thursday',
                        targets:[],
                       notes:[]},
                        {id:'Friday',
                        targets: [],
                       notes:[]},
                        {id:'Saturday',
                        targets:[{
                            adds: "", 
                            done: false, 
                            important: false, 
                            name: "проехать на велосипеде 15км"},
                            {
                            adds: "", 
                            done: false, 
                            important: false, 
                            name: "15 отжиманий"},
                            {
                           adds: "", 
                           done: false, 
                           important: false, 
                           name: "наброски натюрморта"},
                           ],
                       notes:[
                           {day: "Monday", parent: "", text: "посмотреть примеры натюрмортов"},
                           {day: "Monday", parent: "", text: "погулять"}
                       ]
                    },
                        {id:'Sunday',
                        targets: [
                            {
                           adds: "", 
                           done: false, 
                           important: false, 
                           name: "прочитать 3 глагу"},
                           {
                           adds: "", 
                           done: false, 
                           important: false, 
                           name: "пробежка 3 км"},
                           ],
                       notes:[
                           {day: "Monday", parent: "", text: "не есть сладкое"},
                           {day: "Monday", parent: "", text: "хорошо себя вести"}
                       ]}
                ]},
            {id:2,
            weekTarget:[],
            weekDay: [ 
                { id:'Monday',
                    targets:[],
                   notes:[]
               },
               {id:'Tuesday',
               targets:[{
                   adds: "", 
                   done: false, 
                   important: false, 
                   name: "выучить 20 слов"},

                   {
                  adds: "", 
                  done: false, 
                  important: false, 
                  name: "сделать 20 отжиманий"},
                  ],
              notes:[
                  {day: "Monday", parent: "", text: "есть творог"},
                  {day: "Monday", parent: "", text: "пить воду"}
              ]},
                   {id:'Wednesday',
                   targets:[],
                   notes:[]},
                   {id:'Thursday',
                        targets:[
                           {
                           adds: "", 
                           done: false, 
                           important: false, 
                           name: "отдых"},
                           ],
                       notes:[]},
                   {id:'Friday',
                   targets:[],
                   notes:[]},
                   {id:'Saturday',
                   targets:[],
                   notes:[]},
                   {id:'Sunday',
                   targets:[],
                   notes:[]}
               ]},
            {id:3,
                weekTarget:[],
                weekDay:[ 
                         { id:'Monday',
                             targets:[
                                 {
                                adds: "", 
                                done: false, 
                                important: false, 
                                name: "бег 3 км"},
                                {
                                adds: "", 
                                done: false, 
                                important: false, 
                                name: "посмотреть фильм на английском"},
                                ],
                            notes:[
                                {day: "Monday", parent: "", text: "позвонить по работе"},
                                {day: "Monday", parent: "", text: "позвонить Мише"}
                            ]
                        },
                            {id:'Tuesday',
                            targets:[],
                           notes:[]},
                            {id:'Wednesday',
                            targets:[{
                                adds: "", 
                                done: false, 
                                important: false, 
                                name: "прочитать главу 4"},
                               {
                               adds: "", 
                               done: false, 
                               important: false, 
                               name: "выучить правило по английскому"},
                               ],
                           notes:[
                               {day: "Monday", parent: "", text: "купить наушики"},
                               {day: "Monday", parent: "", text: "посмотреть сериал"}
                           ]},
                            {id:'Thursday',
                            targets:[],
                           notes:[]},
                            {id:'Friday',
                            targets: [],
                           notes:[]},
                            {id:'Saturday',
                            targets:[{
                                adds: "", 
                                done: false, 
                                important: false, 
                                name: "пробежка 5км"}
                            ],
                           notes:[
                               {day: "Monday", parent: "", text: "посмотреть работы художников"}
                           ]
                        },
                            {id:'Sunday',
                            targets: [],
                           notes:[]}
                    ]},
            {id:4,
            weekTarget:[],
            weekDay:[ 
                { id:'Monday',
                    targets:[],
                   notes:[]
               },
                   {id:'Tuesday',
                   targets:[],
                   notes:[]},
                   {id:'Wednesday',
                   targets:[],
                   notes:[]},
                   {id:'Thursday',
                   targets:[],
                   notes:[]},
                   {id:'Friday',
                   targets:[],
                   notes:[]},
                   {id:'Saturday',
                   targets:[],
                   notes:[]},
                   {id:'Sunday',
                   targets:[],
                   notes:[]}
               ]},
            {id:5,
            weekTarget:[],
            weekDay:[ 
                { id:'Monday',
                    targets:[],
                   notes:[]
               },
                   {id:'Tuesday',
                   targets:[],
                   notes:[]},
                   {id:'Wednesday',
                   targets:[],
                   notes:[]},
                   {id:'Thursday',
                   targets:[],
                   notes:[]},
                   {id:'Friday',
                   targets:[],
                   notes:[]},
                   {id:'Saturday',
                   targets:[],
                   notes:[]},
                   {id:'Sunday',
                   targets:[],
                   notes:[]}
               ]},
            {id:6,
            weekTarget:[],
            weekDay:[ 
                { id:'Monday',
                    targets:[]},
                   {id:'Tuesday',
                   targets:[]},
                   {id:'Wednesday',
                   targets:[]},
                   {id:'Thursday',
                   targets:[]},
                   {id:'Friday',
                   targets:[]},
                   {id:'Saturday',
                   targets:[]},
                   {id:'Sunday',
                   targets:[]}
               ]}
            ],
        showAllTargetsW:true
    
    }),
    DEFAULT: state=>state
    }
export const byDaysReducer=(state,action)=>{
    const handle= handlers[action.type]||handlers.DEFAULT
    return handle(state,action)
}