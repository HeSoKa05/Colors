;(function(glogal, j){
    
    // إنشاء كائن جديد.
    var Colors = function(color, border){
        return new Colors.init(color, border);
    }
    
    var styles = ['dashed', "double", "dotted","groove", "inset", "outside", "ridge", "solid"];
    
    // النموذج المبدئي
    Colors.prototype = {
        // وظيفة لتغيير اللون وهي قابلة للتسلسل .
        changeColor: function(color){
            this.color = color;
            return this;
        },
        // "قابلة للتسلسل" .rgb تغيير اللون عبر نظام ال.
        rgbColor: function(r, g, b){
            this.color = "rgb(" + r + "," + g + "," + b + ")";
            return this;
        },
        // "وضع الحدود. "قابلة للتسلسل
        setBorder: function(w, s, c){
            if(typeof w !== "number") throw 'border width must be a number';
            s = styles.indexOf(s) !== -1 ? s : 'solid';
            c = c || '#000';
            this.border = w +'px ' + s + ' ' + c;
            return this;
        },
        // "إزالة الحدود. "قابلة للتسلسل
        clearBorder: function(){
            this.border = 'none';
            return this
        },
        // تطبيق الإعدادات على العنصر المرغوب.
        applyOn: function(selector){
            $(selector).css({"color": this.color, "border" : this.border });
        }
    };
    
    // تهيئة الكائن جديد.
    Colors.init = function(color, border){
        // التأكد من تمرير اللون.
        // و إلا سيتم إطلاق خطأ. 
        if(!color) throw 'color is undefined!';
        this.color = color;
        this.border = border ? border + 'px solid #000' : 'none';
    };
    
    // ضبط النموذج المبدئي للكائن الجديد
    Colors.init.prototype = Colors.prototype;
    
    // Colors & C إطلاق
    glogal.C = glogal.Colors = Colors;
    
}(window, $));