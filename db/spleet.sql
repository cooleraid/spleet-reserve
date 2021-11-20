CREATE TABLE `reservations` (
  `reservation_id` int NOT NULL,
  `room_type` varchar(15) NOT NULL,
  `customer_id` int NOT NULL,
  `amount_paid` decimal(10,0) DEFAULT NULL,
  `status` varchar(15) DEFAULT NULL,
  `checking_time` datetime DEFAULT NULL,
  `checkout_time` datetime DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted` tinyint NOT NULL DEFAULT '0'
);

INSERT INTO `reservations` (`reservation_id`, `room_type`, `customer_id`, `amount_paid`, `status`, `checking_time`, `checkout_time`, `created_at`, `deleted`) VALUES
(12000, 'deluxe', 12323, '230000', 'paid', '2020-12-12 12:00:00', '2021-01-01 11:00:00', '2021-11-20 15:19:18', 0),
(12001, 'regular', 12324, '150000', 'paid', '2020-12-12 12:00:00', '2021-01-01 11:00:00', '2021-11-20 15:19:18', 0),
(12002, 'palatial', 12100, '560000', 'paid', '2020-12-12 12:00:00', '2021-01-01 11:00:00', '2021-11-20 15:19:18', 0),
(12003, 'regular', 12323, '200000', 'paid', '2020-12-25 12:00:00', '2021-01-04 11:00:00', '2021-11-20 15:19:18', 0);