 var like = document.getElementById('like');

        function Toggle() {
             if(like.classList.contains("far")) {
            like.classList.remove("far");
            like.classList.add("fas");
        } else{
            like.classList.remove("fas");
            like.classList.add("far");
        }
        }
