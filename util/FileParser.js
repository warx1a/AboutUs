if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function()
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}

var firstwordregex = /\\tab (\w+)/;

//parse our bios
function parseBio(data) {
    var result = "";
    //strip everything between the first tab and the last period
    var bio = data.substring(data.indexOf("\\tab"), data.lastIndexOf(".") + 1);
    // loop through
    var paragraphs = bio.split("\\par");
    for(var i = 0; i < paragraphs.length; i++) {
        var tabbedword = firstwordregex.exec(paragraphs[i]);
        //we got a match
        if(tabbedword !== null) {
            paragraphs[i] = paragraphs[i].replace(firstwordregex, '<span class="tab">' + tabbedword[1] +'</span>');
        }
        paragraphs[i] = paragraphs[i].trim();
        result += paragraphs[i];
        if(i < paragraphs.length - 1) {
            result += "<br>";
        }
    }
    return result;
}

exports.parseBio = parseBio;