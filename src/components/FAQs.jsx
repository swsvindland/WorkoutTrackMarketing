import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'I want a new feature!',
    answer:
      'Awesome, email me at sam@workout-track.com and let me know what you want. I am always looking for new ideas and features to add.',
    links: [],
  },
  {
    question: 'How many people are working on this project?',
    answer:
      'Right now just one. I am a full time software engineer, and I am working on this project in my free time, but I am typically releasing new features every week.',
    links: [],
  },
  {
    question: 'Is this project open source?',
    answer:
      'Not right now. While this is in active development and gaining users, and hopefully on its way to profitability, I am not open sourcing it. If this project becomes unmaintained, or I decide to stop working on it, I will open source it.',
    links: [],
  },
  {
    question: 'How do I change my password?',
    answer:
      'You can change your password by clicking the User Icon in the top right, and then clicking settings. From there you can change your password. You can also logout, and click the forgot password button and a reset email will be sent to you.',
    links: [],
  },
  {
    question: 'Do you sell my data?',
    answer:
      'No! We do not sell your data. We do have Google ads, and if you opt in, they will track you between apps, but we do not sell your personal, or fitness data to anyone.',
    links: [],
  },
  {
    question: 'Why does it take so long to login?',
    answer:
      'This is to keep costs down while we are growing. We are not VC backed, and we are not selling your data. So our revenue is limited to subscriptions, and ads. Once we have a large enough user base, we can move to better servers that will not have the slow startup speed.',
    links: [],
  },
  {
    question: 'Why a subscription and not a flat price?',
    answer:
      'The main reason for this is the ongoing cost of servers and databases. We use a 3rd party for the food db and they charge monthly, as such we basically have to as well. Not to mention file storage for uploaded progress photos.',
    links: [],
  },
  {
    question: 'I want to cancel my subscription',
    answer:
      'Sorry to see you go! But we understand, ongoing costs can be hard to manage. You can cancel your subscription by going to the appropriate app store, clicking your profile, and then clicking "Manage Subscriptions".',
    links: [],
  },
  {
    question: 'I want a refund',
    answer:
      'Sorry that you where not satisfied with our service. First make sure to cancel your subscription. Then you will need to file request with apple or google. We do not have access to your payment information, and cannot issue refunds directly.',
    links: [
      'https://support.apple.com/en-us/HT204084',
      'https://support.google.com/googleplay/workflow/9813244?hl=en',
    ],
  },
];

export function FAQs() {
  return (
    <section id="faq" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="divide-white/10 mx-auto max-w-4xl divide-y">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-secondary">
            Frequently asked questions
          </h2>
          <dl className="divide-white/10 mt-10 space-y-6 divide-y">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="text-white flex w-full items-start justify-between text-left">
                        <span className="font-semibold leading-7 text-secondary">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <PlusSmallIcon
                              className="h-6 w-6 text-secondary"
                              aria-hidden="true"
                            />
                          ) : (
                            <MinusSmallIcon
                              className="h-6 w-6 text-secondary"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="leading-7 text-ternary">{faq.answer}</p>
                      {faq.links.map((link, index) => (
                        <a
                          key={index}
                          href={link}
                          target="_blank"
                          className="leading-7 text-ternary"
                          rel="noreferrer"
                        />
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
