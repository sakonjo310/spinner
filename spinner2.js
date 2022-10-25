const spinner = (char, time) => {
  setTimeout(() => {
    process.stdout.write(char);
  }, time)};

  spinner('\r|   ', 100);
  spinner('\r/   ', 300);
  spinner('\r-   ', 500);
  spinner('\r\\   ', 700);
  spinner('\r|   ', 900);
