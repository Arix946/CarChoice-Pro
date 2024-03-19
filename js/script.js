document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    setTimeout(function () {
      document.getElementById("page-preloader").style.opacity = "0";
      setTimeout(function () {
        document.getElementById("page-preloader").style.display = "none";
      }, 300);
    }, 1000);
  });

  function openNav() {
  }

  function closeNav() {
  }

  const contactForm = document.getElementById("contact-form");
  const confirmationMessage = document.getElementById("confirmation");

  const handleFormSubmission = function (e) {
    e.preventDefault();

    setTimeout(function () {
      contactForm.reset();

      confirmationMessage.style.display = "block";

      setTimeout(function () {
        confirmationMessage.style.display = "none";
      }, 3000); 
    }, 1000); 
  };

  const clearFiltersButton = document.getElementById("clear-filters-button");

  });

  const userLocationInput = document.getElementById('userLocation');
  const detectLocationButton = document.getElementById('detectLocation');


    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

      }, function (error) {
        
      });
    } else {
  
      alert("Geolocation is not supported in your browser.");
    }
  
  const makeFilter = document.getElementById('makeFilter');

  function displayRecommendedCars(cars) {
    const recommendedCarList = document.getElementById('recommendedCarList');
  }

  const sortSelect = document.getElementById('sortSelect');

  const resetFiltersButton = document.getElementById('resetFilters');
  const clearAllButton = document.getElementById('clearAll');

  
  
  