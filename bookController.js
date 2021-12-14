const createError = require("http-errors")

let bookList = []
let idno = 0
let isRead=false



exports.index = function (req, res){
    res.send(bookList)
}

exports.create =function (req, res, next){
    if (!req.body.title){
        return(next(createError(400,"title is required")))
    }
    bookList.push({
    id: idno,
    title:req.body.title,
    author:req.body.author,
    isRead:false

    });
    idno++;
    res.send({result: "true"})

    }

    exports.show = function (req, res, next){
        const bookItem = bookList.find((item)=>item.id == req.params.id )
        if(!bookItem){
            return(next(createError(404,"no book with that id")))
    
        }
        res.send(bookItem)
    }
    exports.byTitle = function (req, res, next){
        const bookItem = bookList.find((item)=>item.title == req.params.title )
        if(!bookItem){
            return(next(createError(404,"no book with that title")))
    
        }
        res.send(bookItem)
    }

    exports.byAuthor= function (req, res, next){
        const bookItem = bookList.find((item)=>item.author == req.params.author)
        if(!bookItem){
            return(next(createError(404,"no book with that author")))
    
        }
        res.send(bookItem)
    }


    exports.update = function (req,res,next){
        //verifying
        const bookItem = bookList.find( (item) => item.id == req.params.id && item.isRead == false)
    
        
        
        if(isRead == true){
            return (next(createError(400,"this book is read")))
        }
        if(!req.body.title){
            return (next(createError(400,"title is required")))
        }
        
        if(!bookItem) {
            return (next(createError(404,"no book with that id")))
        }
        
    //updating
        bookList = bookList.map ((item) => {
            if(item.id == req.params.id){
                item.title = req.body.title,
                //item.author= req.body.author,
                item.isRead = true
            }
            
            return item;
    
        } )
    
        res.send({result: true})
    }
    
    exports.delete = function (req,res,next) {
        //verifying
        const bookItem = bookList.find( (item) => item.id == req.params.id )
    
        if(!bookItem) {
            return (next(createError(404,"no book with that id")))
        }
    
        //deleting
        bookList = bookList.filter( (item) => item.id != req.params.id)
        res.send({result:true})
    }