jQuery(document).ready(function(){

    var zipCode=10304;

    $('.table').hide();


        $('#enter').on('click',function(enter){
            $('#description').html('loading...');
            enter.preventDefault();
            $('.table').show();
            zipCode=$('#zip').val();

            axios.get('http://api.openweathermap.org/data/2.5/weather?zip='+zipCode+',us&APPID=513b724dbc696b9fb2a2b4ace712052f&units=imperial').then(function(resources){
            

               
                var myWeather=resources.data;
                var main=myWeather.weather[0].main;
                var description=myWeather.weather[0].description;
                var iconCode=myWeather.weather[0].icon;
                var iconURL='http://openweathermap.org/img/w/'+iconCode+'.png';
                var name=myWeather.name;
                var temp=myWeather.main.temp;
                var pressure=myWeather.main.pressure;
                var humidity=myWeather.main.humidity;
                var minTemp=myWeather.main.temp_min;
                var maxTemp=myWeather.main.temp_max;
                var visibility=myWeather.visibility;
                var windSpeed=myWeather.wind.speed;
                var windDeg= myWeather.wind.deg;
                var country=myWeather.sys.country;
                var sunrise=myWeather.sys.sunrise;
                var sunset=myWeather.sys.sunset;
                
        if(temp<=35){
            var backgroundImage='url(https://www.esrl.noaa.gov/news/quarterly/winter-2011/img/snow.jpg)';
            $('body').css('background-image',backgroundImage);

        }
                
        else if(temp>35 && temp<=65){
            var backgroundImage='url(http://dobrudjabg.com/ufiles/2018/06/n/vremeto-na-14-iuni-2_921.jpg)';
            $('body').css('background-image',backgroundImage);


        }

        else {
            var backgroundImage='url(https://cdn-images-1.medium.com/max/2000/1*ulsHp5klhQEffCQUchuTOQ.jpeg)';
            $('body').css('background-image',backgroundImage);

        }
            $('#Tname').html('Name');
            $('#name').html(name);
            $('#Ttemp').html('Temperature');
            $('#temp').html(temp);
            $('#Tpressure').html('Pressure');
            $('#pressure').html(pressure);
            $('#Thumidity').html('Humidity');
            $('#humidity').html(humidity);
            $('#TminTemp').html('Min Temperature');
            $('#minTemp').html(minTemp);
            $('#TmaxTemp').html('Max Temperature');
            $('#maxTemp').html(maxTemp);
            $('#Tvisibility').html('Visibility');
            $('#visibility').html(visibility);
            $('#TwindSpeed').html('Wind Speed');
            $('#windSpeed').html(windSpeed);
            $('#TwindDeg').html('Wind Degree');
            $('#windDeg').html(windDeg);
            $('#Tcountry').html('Country');
            $('#country').html(country);
            $('#Tsunrise').html('Sunrise');
            $('#sunrise').html(sunrise);
            $('#Tsunset').html('Sunset');
            $('#sunset').html(sunset);
            $('#main').html(main);
            $('#description').html(description);
            $('#icon').html('<img src=" '+iconURL+' ">');
        });
        
    });
});
