-- DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id BIGSERIAL NOT NULL,
  userName VARCHAR(100) NOT NULL,
  creditCardNumber BIGINT,
  billingAddress VARCHAR(600),
  PRIMARY KEY (id)
);

-- DROP TABLE IF EXISTS owners;

CREATE TABLE owners (
  id BIGSERIAL NOT NULL,
  ownerName VARCHAR(100) NOT NULL,
  creditCardNumber BIGINT,
  billingAddress VARCHAR(600),
  superHost BOOLEAN,
  PRIMARY KEY (id)
);

-- DROP TABLE IF EXISTS listings;

CREATE TABLE listings (
  id BIGSERIAL NOT NULL,
  owner_id INT NOT NULL,
  maxGuests INT NOT NULL,
  price INT NOT NULL,
  minStay INT NOT NULL,
  cleaningFee INT NOT NULL,
  areaTax INT NOT NULL,
  PRIMARY KEY (id)
);

-- DROP TABLE IF EXISTS bookings;

CREATE TABLE bookings (
  id BIGSERIAL NOT NULL,
  listing_id INT NOT NULL,
  user_id INT NOT NULL,
  startDate DATE NOT NULL,
  endDate DATE NOT NULL,
  PRIMARY KEY (id)
);

-- DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id BIGSERIAL NOT NULL,
  rating INT NOT NULL,
  listing_id INT NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE listings ADD FOREIGN KEY (owner_id) REFERENCES owners (id);
ALTER TABLE bookings ADD FOREIGN KEY (listing_id) REFERENCES listings (id);
ALTER TABLE bookings ADD FOREIGN KEY (user_id) REFERENCES users (id);
ALTER TABLE reviews ADD FOREIGN KEY (listing_id) REFERENCES listings (id);

