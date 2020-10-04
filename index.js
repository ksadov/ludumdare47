window.addEventListener('load', function(ev) {
    const states = Object.freeze({
	"smallsmile":"src/smallsmile.png",
	"bigsmile":"src/bigsmile.png",
	"bigsmile2":"src/bigsmile2.png",
	"flirty1":"src/flirty1.png",
	"flirty2":"src/flirty2.png",
	"flustered":"src/flustered.png",
	"flustered2":"src/flustered2.png",
	"hearteyes":"src/hearteyes.png",
	"hearteyes2":"src/hearteyes2.png",
	"nervous":"src/nervous.png",
	"teary":"src/teary.png",
	"crying":"src/crying.png",
	"crying2":"src/crying2.png"
    });
    
    const transitions = Object.freeze({
	"smile":1,
	"grin":2,
	"frown":3,
	"angry":4,
	"wink":5
    });    

    var savedState = states.smallsmile;
    
    function createTitle() {
	var titleId = Math.floor(Math.random() * 3) + 1;
	document.getElementById('start').src = "src/title" + titleId + ".png";
    }

    createTitle();
    
    var startButton = document.getElementById('start');
    
    startButton.addEventListener ('click', function () {
	createTitle();
	state = states.smallsmile;
	updateSprite();
	document.getElementById('titleScreen').hidden = true;
	document.getElementById('gameContent').hidden = false;
    }, false);
    
    var titleButton = document.getElementById('title');
    
    titleButton.addEventListener ('click', function () {
	document.getElementById('titleScreen').hidden = false;
	document.getElementById('gameContent').hidden = true;
    }, false);

    var saveButton = document.getElementById('save');
    var loadButton = document.getElementById('load');
    
    saveButton.addEventListener ('click', function () {
	savedState = state;
    }, false);

    loadButton.addEventListener ('click', function () {
	state = savedState;
	updateSprite();
     }, false);
    
    var smileButton = document.getElementById('smile');
    var grinButton = document.getElementById('grin');
    var frownButton = document.getElementById('frown');
    var angryButton = document.getElementById('angry');
    var winkButton = document.getElementById('wink');

    let sprite = document.getElementById('sprite');
    
    smileButton.addEventListener ('click', function () {
	transition(transitions.smile);
    }, false);

    grinButton.addEventListener ('click', function () {
	transition(transitions.grin);
    }, false);

    frownButton.addEventListener ('click', function () {
	transition(transitions.frown);
    }, false);

    angryButton.addEventListener ('click', function () {
	transition(transitions.angry);
    }, false);

    winkButton.addEventListener ('click', function () {
	transition(transitions.wink);
    }, false);
        
    function updateSprite() {
	sprite.src = state;
    }
    
    function transition(t) {
	if (state == states.smallsmile)   {
	    if (t == transitions.smile) {
		state = states.flirty1;
	    }
	    else if (t == transitions.grin) {
		state = states.bigsmile;
	    }
	    else if (t == transitions.frown) {
		state = states.nervous;
	    }
	    else if (t == transitions.angry) {
		state = states.nervous;
	    }
	    else if (t == transitions.wink) {
		state = states.flirty2;
	    }
	}
	else if (state == states.bigsmile)   {
	    if (t == transitions.smile) {
		state = states.smallsmile;		
	    }
	    else if (t == transitions.grin) {
		state = states.bigsmile2;
	    }
	    else if (t == transitions.frown) {
		state = states.nervous;
	    }
	    else if (t == transitions.angry) {
		state = states.nervous;
	    }
	    else if (t == transitions.wink) {
		state = states.flirty1;
	    }
	}
	else if (state == states.bigsmile2)   {
	    if (t == transitions.smile) {
		state = states.smallsmile;		
	    }
	    else if (t == transitions.grin) {
		state = states.bigsmile;
	    }
	    else if (t == transitions.frown) {
		state = states.nervous;
	    }
	    else if (t == transitions.angry) {
		state = states.nervous;
	    }
	    else if (t == transitions.wink) {
		state = states.flirty1;
	    }
	}
	else if (state == states.flirty1)   {
	    if (t == transitions.smile) {
		state = states.flirty2;		
	    }
	    else if (t == transitions.grin) {
		state = states.flirty2;
	    }
	    else if (t == transitions.frown) {
		state = states.flustered;
	    }
	    else if (t == transitions.angry) {
		state = states.flustered;
	    }
	    else if (t == transitions.wink) {
		state = states.flirty2;
	    }	
	}
	else if (state == states.flirty2)   {
	    if (t == transitions.smile) {
		state = states.hearteyes;		
	    }
	    else if (t == transitions.grin) {
		state = states.hearteyes;
	    }
	    else if (t == transitions.frown) {
		state = states.flustered;
	    }
	    else if (t == transitions.angry) {
		state = states.flustered;
	    }
	    else if (t == transitions.wink) {
		state = states.hearteyes;
	    }
	}
	else if (state == states.flustered)   {
	    if (t == transitions.smile) {
		state = states.flirty1;		
	    }
	    else if (t == transitions.grin) {
		state = states.flustered2;
	    }
	    else if (t == transitions.frown) {
		state = states.flustered2;
	    }
	    else if (t == transitions.angry) {
		state = states.teary;
	    }
	    else if (t == transitions.wink) {
		state = states.flustered2;
	    }
	}
	else if (state == states.flustered2)   {
	    if (t == transitions.smile) {
		state = states.flirty1;		
	    }
	    else if (t == transitions.grin) {
		state = states.flustered;
	    }
	    else if (t == transitions.frown) {
		state = states.flustered;
	    }
	    else if (t == transitions.angry) {
		state = states.teary;
	    }
	    else if (t == transitions.wink) {
		state = states.flustered;
	    }
	}
	else if (state == states.hearteyes)   {
	    if (t == transitions.smile) {
		state = states.hearteyes2;		
	    }
	    else if (t == transitions.grin) {
		state = states.hearteyes2;
	    }
	    else if (t == transitions.frown) {
		state = states.flustered;
	    }
	    else if (t == transitions.angry) {
		state = states.flustered;
	    }
	    else if (t == transitions.wink) {
		state = states.hearteyes2;
	    }
	}
	else if (state == states.hearteyes2)   {
	    if (t == transitions.smile) {
		state = states.hearteyes;		
	    }
	    else if (t == transitions.grin) {
		state = states.hearteyes;
	    }
	    else if (t == transitions.frown) {
		state = states.flustered;
	    }
	    else if (t == transitions.angry) {
		state = states.flustered;
	    }
	    else if (t == transitions.wink) {
		state = states.hearteyes;
	    }
	}
	else if (state == states.nervous)   {
	    if (t == transitions.smile) {
		state = states.smallsmile;		
	    }
	    else if (t == transitions.grin) {
		state = states.smallsmile;
	    }
	    else if (t == transitions.frown) {
		state = states.teary;
	    }
	    else if (t == transitions.angry) {
		state = states.teary;
	    }
	    else if (t == transitions.wink) {
		state = states.flirty1;
	    }
	}
	else if (state == states.teary)   {
	    if (t == transitions.smile) {
		state = states.nervous;		
	    }
	    else if (t == transitions.grin) {
		state = states.crying;
	    }
	    else if (t == transitions.frown) {
		state = states.crying;
	    }
	    else if (t == transitions.angry) {
		state = states.crying;
	    }
	    else if (t == transitions.wink) {
		state = states.crying;
	    }
	}
	else if (state == states.crying)   {
	    if (t == transitions.smile) {
		state = states.teary;		
	    }
	    else if (t == transitions.grin) {
		state = states.crying2;
	    }
	    else if (t == transitions.frown) {
		state = states.teary;
	    }
	    else if (t == transitions.angry) {
		state = states.crying2;
	    }
	    else if (t == transitions.wink) {
		state = states.crying2;
	    }
	}
	else if (state == states.crying2)   {
	    if (t == transitions.smile) {
		state = states.nervous;		
	    }
	    else if (t == transitions.grin) {
		state = states.crying;
	    }
	    else if (t == transitions.frown) {
		state = states.teary;
	    }
	    else if (t == transitions.angry) {
		state = states.crying;
	    }
	    else if (t == transitions.wink) {
		state = states.crying;
	    }
	}
	updateSprite();
    }
    
} ,false);
