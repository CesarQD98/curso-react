// @ts-check
import { test, expect } from '@playwright/test'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
})

test('should change cat fact and image after pressing the button', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const initialText = await page.getByRole('paragraph')
  const initialImage = await page.getByRole('img')

  const initialTextContent = await initialText.textContent()
  const initialImageSrc = await initialImage.getAttribute('src')

  console.log({ initialTextContent, initialImageSrc })

  await page.getByRole('button').click()

  const newText = await page.getByRole('paragraph')
  const newImage = await page.getByRole('img')

  const newTextContent = await newText.textContent()
  const newImageSrc = await newImage.getAttribute('src')

  console.log({ newTextContent, newImageSrc })

  await expect(initialTextContent).not.toBe(newTextContent)
  await expect(initialImageSrc).not.toBe(newImageSrc)
})
