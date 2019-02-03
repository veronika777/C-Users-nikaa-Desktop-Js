window.onload = function() {
    document.getElementById('ButtonStyle').onclick = function()
    {
        if(document.body.className != 'new_class')
        {
            document.body.className = 'new_class';
        }
        else
        {
            document.body.className = '';
        }
    }
}