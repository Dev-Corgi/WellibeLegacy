const axios = require('axios');
const { execSync } = require('child_process');

const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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'; // Slack 웹훅 URL

// Expo 빌드 및 QR 코드 생성 명령
const expoBuildCommand = 'expo build:web';
const qrGenerateCommand = 'expo publish --no-interactive';

try {
  // Expo 빌드 실행
  execSync(expoBuildCommand, { stdio: 'inherit' });

  // Expo QR 코드 생성 실행
  execSync(qrGenerateCommand, { stdio: 'inherit' });

  // QR 코드 이미지 URL 추출 및 Slack에 전송
  const qrCodeImageUrl = 'URL_TO_QR_CODE_IMAGE'; // expo publish 명령 실행 결과에서 얻은 QR 코드 이미지 URL
  const message = {
    text: 'New Expo build available!',
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: 'A new build is available for preview:'
        },
        accessory: {
          type: 'image',
          image_url: qrCodeImageUrl,
          alt_text: 'QR Code'
        }
      }
    ]
  };

  axios.post(SLACK_WEBHOOK_URL, message);
} catch (error) {
  console.error('Error:', error);
}
