'use strict';

var CLOUD_WIDTH = 410; //  ширина облака
var CLOUD_HEIGHT = 260; // высота облака
var CLOUD_X = 150; // Начало координат
var CLOUD_Y = 10; // Начало координат
var GAP = 10; // смещение для тени и для углов многоугольника 10px;
var BAR_COLUMN_WIDTH = 40;
var BAR_COLUMN_HEIGHT = 150;

var TEXT_WIDTH = 50; // Ширина текста
var RENDER_GAP = 30;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + (CLOUD_WIDTH / 2), y - GAP);
  ctx.lineTo(x + CLOUD_WIDTH, y);
  ctx.lineTo(x + CLOUD_WIDTH + GAP, y + (CLOUD_HEIGHT / 2));
  ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
  ctx.lineTo(x + (CLOUD_WIDTH / 2), y + CLOUD_HEIGHT + GAP);
  ctx.lineTo(x, y + CLOUD_HEIGHT);
  ctx.lineTo(x - GAP, y + (CLOUD_HEIGHT / 2));
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('УРА ВЫ ПОБЕДИЛИ!', x + GAP + 110, y + GAP); // 110 используется для центрирования
  ctx.fillText('Список результатов:', x + GAP, y + GAP * 3);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var renderBar = function (ctx, x, y, players, times) {
  var BAR_COLUMN_MY_COLOR = 'rgba(255, 0, 0, 1)';
  var BAR_COLUMN_ANY_COLOR = 'rgba(0, 255, 0, 1)';
  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], x + RENDER_GAP + (TEXT_WIDTH + BAR_COLUMN_WIDTH) * i, y + CLOUD_HEIGHT - GAP * 3);
    ctx.fillText(Math.round(times[i]), x + RENDER_GAP + (TEXT_WIDTH + BAR_COLUMN_WIDTH) * i, y + GAP * 5);
    if (players[i] === 'Вы') {
      ctx.fillStyle = BAR_COLUMN_MY_COLOR;
      ctx.fillRect(x + RENDER_GAP + (TEXT_WIDTH + BAR_COLUMN_WIDTH) * i, CLOUD_HEIGHT - RENDER_GAP, BAR_COLUMN_WIDTH, -((BAR_COLUMN_HEIGHT * times[i]) / maxTime));
    } else {
      ctx.fillStyle = BAR_COLUMN_ANY_COLOR;
      ctx.fillRect(x + RENDER_GAP + (TEXT_WIDTH + BAR_COLUMN_WIDTH) * i, CLOUD_HEIGHT - RENDER_GAP, BAR_COLUMN_WIDTH, -((BAR_COLUMN_HEIGHT * times[i]) / maxTime));
    }

  }
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderBar(ctx, CLOUD_X, CLOUD_Y, players, times);

};
