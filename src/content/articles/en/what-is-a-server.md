---
title: "What Is a Server? What It Does, the Main Types and How Websites Work"
description: "What is a server and what does it do? A simple guide to servers in networks and on the internet, the main types from web servers to game servers, and the different kinds of web hosting."
category: technology
date: 2026-10-23
updated: 2026-11-20
tags: ["servers", "internet", "networking", "web hosting"]
keywords: ["what is a server", "what does a server do", "types of servers", "game servers", "web hosting types"]
---

Every time you load a website, stream a video or join an online match, a machine you'll never see is doing work for you somewhere in the world. So what is a server, exactly? It's that machine, and once you understand how it works, a lot of everyday internet behaviour (slow games, sites that crash on results day) starts to make sense.

## What is a server and what does it do?

A server is **a computer, or a program running on one, that provides services or data to other devices over a network**. The devices asking for things, like your phone or laptop, are called clients.

Think of a school canteen. A student asks for a sandwich, the person behind the counter prepares it and hands it over. Networks work the same way, and the arrangement is called the **client–server model**: your device requests something such as a web page, the server receives the request and prepares a response, then sends the page back so it appears on your screen. The only real difference is scale. A busy server may handle thousands of requests every second.

## What happens when you open a website?

Say you type maloomah.com into your browser and press Enter. Here's the sequence:

1. Your device asks a DNS (Domain Name System) server for the site's address. DNS works like the internet's phone book.
2. The DNS server replies with a numeric address called an IP address.
3. Your browser connects to the server at that address and asks for the page.
4. The server sends the page's files: text, images and styling.
5. Your browser puts them together and shows you the site.

All of that usually happens in a fraction of a second. The reason the first two steps exist at all is that people remember names while machines route traffic by numbers, so something has to translate between the two.

## How is a server different from a normal computer?

In principle, any computer can act as a server. The difference is in what's expected of it. You switch your home computer off at night; a company's servers are built to run 24 hours a day without stopping, because someone, somewhere, is always visiting.

That's why they live in large **data centres** that are cooled and secured, mounted in metal cabinets called racks. Data centres have backup power for outages and extremely fast internet links. Data is usually copied across several machines too, so if one fails, another carries on and nothing is lost.

> **Did you know?** The site you're reading doesn't run on a single server but on a network of servers spread around the world called a content delivery network (CDN), so it reaches you from the nearest one, which is why it loads so quickly.

## Types of servers and what each one does

Servers tend to specialise. These are the ones you rely on most:

| Type | What it does | Example |
| --- | --- | --- |
| Web server | Serves website pages | Any site you visit |
| Mail server | Sends and receives email | Gmail |
| Database server | Stores and organises data | User account data |
| File server | Stores and shares files | Cloud storage |
| Game server | Connects players in the same game | PUBG, Free Fire, Minecraft |
| DNS server | Translates site names into addresses | The internet's directory |
| Streaming server | Delivers live video and audio | Video and live-streaming platforms |

Several of them often cooperate behind a single click. When you log in to a site, the web server shows you the page while a database server quietly checks your username and password.

## What is a server in games like PUBG?

In online games, the server is the machine that puts players into the same match, keeps track of every move and tells everyone else what just happened. Games split their servers into regions such as the Middle East, Europe and Asia.

Region matters because data takes time to travel. Pick the server closest to you and your **ping**, the time it takes your data to reach the server and come back, drops, so the game feels quicker and lags less. A player in Cairo will usually have a smoother match on a Middle East server than on one in East Asia.

## Types of web hosting: where should your site live?

If you ever build a website, for a school project or a hobby, it needs space on a server. Renting that space is called web hosting, and the options differ in price, power and control:

1. Shared hosting: your site shares one server with many others. Cheap and easy, good for beginners.
2. Virtual private server (VPS): a dedicated slice of a powerful server, with more resources and control.
3. Dedicated server: a whole server just for you. Very powerful and expensive, for large sites.
4. Cloud hosting: resources spread across many servers that scale up and down as needed, such as services from Amazon, Google and Microsoft.
5. Static site hosting: for sites made of ready-built pages, often free and very fast.

A sensible rule is to start small and move up only when your site actually outgrows its plan.

## What does "the server is down" mean?

When people say the server is down, they mean it has stopped responding to requests. That can be a fault or planned maintenance. It can also be sheer traffic, the way exam-results sites sometimes buckle on the day results come out, or a cyberattack that floods the server with fake requests until real visitors can't get through.

## Questions students ask about servers

### Can my own computer be a server?

Yes. With the right software any computer can become a server, for example a small game server for your friends. The catch is that it has to stay switched on and connected to the internet the whole time.

### What's the difference between a server and hosting?

The server is the machine itself. Hosting is the service that rents you space and resources on a server for your website, a bit like the difference between a building and the flat you rent inside it.

### What is a "server" on a satellite receiver or IPTV box?

That's a completely different topic, about decrypting pay-TV channels. It's covered in detail here: [Receiver and IPTV Server Codes](/en/articles/receiver-iptv-server-codes/).

Without servers there would be no websites to open, no email arriving and no online matches to join. They're the quiet machines in data centres that never switch off.
