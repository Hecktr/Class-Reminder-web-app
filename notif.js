function notifRequest(){
    Notification.requestPermission((result) => {
        console.log(result);
      });
    }
