const findDuplicate = function (nums) {
  let tortoise = 0;
  let rabbit = 0;
  while (tortoise !== rabbit || tortoise === 0) {
    tortoise = nums[tortoise];
    rabbit = nums[nums[rabbit]];
  }
  tortoise = 0;
  while (tortoise !== rabbit) {
    tortoise = nums[tortoise];
    rabbit = nums[rabbit];
  }
  return tortoise;
};

module.exports = findDuplicate